import UpdatePost from "@/components/Posts/UpdatePost/page";
import DashboardLayout from "../DashboardLayout/layout";

export default function Update() {
  return (
    <>
      <DashboardLayout>
        <h1>Update Post</h1>
        <UpdatePost />
      </DashboardLayout>
    </>
  );
}
