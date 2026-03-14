import matter from "gray-matter";

export function contentPlugin() {
  return {
    name: "content-markdown",
    transform(code: string, id: string) {
      if (!id.endsWith(".md")) return null;
      const { data, content } = matter(code);
      return {
        code: `export default ${JSON.stringify({ ...data, body: content.trim() })}`,
        map: null,
      };
    },
  };
}
