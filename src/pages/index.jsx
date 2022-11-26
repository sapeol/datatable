import people from "@/data/people.json"
import Datatable from "ui/datatable";
export default function Homepage() {
  return (
    <div className="mt-16 container mx-auto">
      <Datatable rows={people} />
    </div>
  );
}

