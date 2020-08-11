import Swal from "sweetalert2";

export class Alert {
  static ALERT_TYPES = {
    ERROR: "error",
    INFO: "info",
    SUCCESS: "success",
    WARNING: "warning",
  };

  static fire(type, msg) {
    Swal.fire({
      position: "top",
      icon: type,
      title: msg,
      showConfirmButton: false,
      timer: 1500,
      showClass: {
        popup: "animate__animated animate__bounceInDown",
      },
      hideClass: {
        popup: "animate__animated animate__bounceOutUp",
      },
    });
  }

  static error(msg) {
    Alert.fire(Alert.ALERT_TYPES.ERROR, msg);
  }

  static info(msg) {
    Alert.fire(Alert.ALERT_TYPES.INFO, msg);
  }

  static success(msg) {
    Alert.fire(Alert.ALERT_TYPES.SUCCESS, msg);
  }

  static warning(msg) {
    Alert.fire(Alert.ALERT_TYPES.WARNING, msg);
  }
}
