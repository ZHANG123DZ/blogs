export default function nestComments(flatComments) {
  const map = {};
  const roots = [];

  flatComments.forEach((comment) => {
    map[comment.id] = { ...comment, children: [] };
  });

  flatComments.forEach((comment) => {
    const node = map[comment.id];
    if (comment.parent_id) {
      const parent = map[comment.parent_id];
      if (parent) {
        parent.children.push(node);
      } else {
        roots.push(node);
      }
    } else {
      roots.push(node);
    }
  });

  return roots;
}
