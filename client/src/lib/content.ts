export function formatDate(dateStr: any): string {
  if (!dateStr) return "";
  let str: string;
  if (dateStr instanceof Date) {
    str = `${dateStr.getFullYear()}-${String(dateStr.getMonth()+1).padStart(2,'0')}-${String(dateStr.getDate()).padStart(2,'0')}`;
  } else {
    str = String(dateStr);
  }
  const parts = str.split("-");
  if (parts.length !== 3) return str;
  const year = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10);
  const day = parseInt(parts[2], 10);
  const d = new Date(year, month - 1, day);
  return d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

const toLocalDate = (raw: any): Date => {
  if (raw instanceof Date) {
    return new Date(raw.getUTCFullYear(), raw.getUTCMonth(), raw.getUTCDate());
  }
  const [y, m, d] = String(raw).split("-").map(Number);
  return new Date(y, m - 1, d);
};

export interface Activity {
  slug: string;
  title: string;
  status: "upcoming" | "past";
  date: string;
  time: string;
  location: string;
  ad
