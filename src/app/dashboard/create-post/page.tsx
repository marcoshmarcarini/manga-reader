import CreatePost from "@/components/Posts/CreatePost/page";
import DashboardLayout from "../DashboardLayout/layout";

export default function Create() {
  return (
    <>
      <DashboardLayout>
        <h1>Crie seu Post</h1>
        <div>
          <CreatePost />
        </div>
      </DashboardLayout>
    </>
  );
}
