export const userUtils = {
  getInitials: (name?: string): string => {
    if (!name) return "";
    const [firstName, lastName] = name.split(" ");
    const first = firstName[0];
    const second = lastName[0] || "";
    if (!first) return "";
    return first + second;
  },
};
