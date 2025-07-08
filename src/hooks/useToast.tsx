import { toast } from "sonner";

toast("Simple message");

toast.success("Action completed!");
toast.error("Something went wrong!");
toast.info("Heads up!");
toast("Custom toast with description", {
  description: "Here’s more info about what happened.",
});
toast("Item deleted", {
  action: {
    label: "Undo",
    onClick: () => {
      console.log("Undo clicked");
    },
  },
});
