import { toast } from "sonner";

export function successToast(message: string) {
  return toast.success(message, {
    style: {
      color: "green",
    },
  });
}

export function errorToast(message: string) {
  return toast.error(message, {
    style: {
      color: "red",
    },
  });
}

export function infoToast(message: string) {
  return toast.info(message, {
    style: {
      color: "blue",
    },
  });
}

export function warningToast(message: string) {
  return toast.warning(message, {
    style: {
      color: "yellow",
    },
  });
}
