import { redirect } from "next/navigation";

export default function SellerDashboard() {
  redirect("/seller/dashboard/gift");
  return (
    <div>
      Перенаправляем в панель управления...
    </div>
  );
}
