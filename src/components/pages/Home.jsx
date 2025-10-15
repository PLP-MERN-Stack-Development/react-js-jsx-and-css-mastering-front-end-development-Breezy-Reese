import Card from "../Card";

export default function Home() {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Welcome to Task Manager
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Organize your tasks efficiently with our modern task management application.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card title="Task Management">
          <p>Create, edit, and manage your daily tasks with ease. Mark them as complete and filter by status.</p>
        </Card>

        <Card title="API Data Integration">
          <p>View and search through sample data fetched from external APIs. Perfect for learning data handling.</p>
        </Card>

        <Card title="Dark Mode Support">
          <p>Switch between light and dark themes for comfortable viewing in any environment.</p>
        </Card>
      </div>

      <div className="text-center">
        <p className="text-gray-600 dark:text-gray-400">
          Get started by navigating to the Tasks page or exploring the API Data section.
        </p>
      </div>
    </div>
  );
}
