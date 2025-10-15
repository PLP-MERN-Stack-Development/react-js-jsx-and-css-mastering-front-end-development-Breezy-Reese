export default function Footer() {
  return (
    <footer className="text-center py-4 text-gray-600 dark:text-gray-400">
      © {new Date().getFullYear()} Task Manager. All rights reserved.
    </footer>
  );
}
