import { NextRequest } from 'next/server';
import { projects } from '@/data/projects';

type RouteContext = {
  params: Promise<{
    slug: string;
  }>;
};

const escapePdfText = (value: string) =>
  value
    .replace(/\\/g, '\\\\')
    .replace(/\(/g, '\\(')
    .replace(/\)/g, '\\)');

const buildPdf = (project: (typeof projects)[number]): Uint8Array => {
  const lines = [
    project.title,
    '',
    project.summary,
    '',
    `Live: ${project.liveUrl ?? '—'}`,
    `Code: ${project.githubUrl}`,
    `Stack: ${project.stack.join(', ')}`,
    '',
    'Highlights:',
    ...project.highlights.map((item, index) => `${index + 1}. ${item}`),
    '',
    `Impact: ${project.impact}`,
    `Role: ${project.role}`,
    `Timeline: ${project.timeline}`,
  ];

  const escapedLines = lines.map(escapePdfText);

  let stream = 'BT\n/F1 18 Tf\n72 760 Td\n';
  escapedLines.forEach((line, idx) => {
    const leading = idx === 0 ? -28 : -22;
    stream += `(${line}) Tj\n0 ${leading} Td\n`;
  });
  stream += 'ET';

  const streamLength = Buffer.byteLength(stream, 'utf-8');

  const objects = [
    '1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n',
    '2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n',
    '3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>\nendobj\n',
    `4 0 obj\n<< /Length ${streamLength} >>\nstream\n${stream}\nendstream\nendobj\n`,
    '5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n',
  ];

  let output = '%PDF-1.4\n';
  const offsets: number[] = [0];
  let position = output.length;

  objects.forEach((obj) => {
    offsets.push(position);
    output += obj;
    position += obj.length;
  });

  const xrefPosition = output.length;
  let xref = `xref\n0 ${objects.length + 1}\n`;
  xref += '0000000000 65535 f \n';
  offsets.slice(1).forEach((offset) => {
    xref += `${offset.toString().padStart(10, '0')} 00000 n \n`;
  });

  const trailer = `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefPosition}\n%%EOF`;
  const pdfString = output + xref + trailer;

  return Buffer.from(pdfString, 'utf-8');
};

export const GET = async (_req: NextRequest, context: RouteContext) => {
  const params = await context.params;
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    return new Response(JSON.stringify({ error: 'Project not found' }), {
      status: 404,
      headers: { 'content-type': 'application/json' },
    });
  }

  const pdfBytes = buildPdf(project);

  return new Response(pdfBytes, {
    status: 200,
    headers: {
      'content-type': 'application/pdf',
      'content-disposition': `inline; filename="${project.slug}.pdf"`,
    },
  });
};
