import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./components/pages/Home";
import Tasks from "./components/pages/Tasks";
import ApiData from "./components/pages/ApiData";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/api-data" element={<ApiData />} />
      </Routes>
    </Layout>
  );
}
