export default function guardrail(mathFunction) {
  const queue = [];
  try {
    queue.push(mathFunction());
    queue.push('Guardrail was processed');
  } catch (error) {
    queue.push(String(error));
    queue.push('Guardrail was processed');
  }
  return queue;
}
