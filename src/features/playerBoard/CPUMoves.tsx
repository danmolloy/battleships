export const fetchMove = () => {
  return new Promise<{ data: number }>((resolve) => 
    setTimeout(() => resolve({ data: Math.floor(Math.random() * 100)}), 500)
  );
}
