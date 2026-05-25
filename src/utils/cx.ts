type ClassValue = string | number | false | null | undefined;

export function cx(...parts: ClassValue[]): string {
  let out = "";
  for (const p of parts) {
    if (!p) continue;
    out = out ? `${out} ${p}` : String(p);
  }
  return out;
}
