import { Button } from "@/components/ui/button";
import { TrolleyIcon } from "@sanity/icons";

export default function Home() {
  return (
    <div>
      <h1>Hello world!</h1>
     <Button>
        <TrolleyIcon className="h-6 w-6"/>
     </Button>
    </div>
  );
}
