import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      buttonLanguage: "Change language",
      moveShape: "Move Shape",
      movePosition: "Move Position",
      shapeMode: "Shape Mode",
      crudMode: "CRUD Mode",
      name: "Name",
      age: "Age",
      action: "Action",
      submit: "Submit",
      update: "Update",
      edit: "Edit",
      delete: "Delete",
      placeholderName: "Enter name",
      placeholderAge: "Enter age",
    },
  },
  th: {
    translation: {
      buttonLanguage: "เปลี่ยนภาษา",
      moveShape: "ย้ายรูปร่าง",
      movePosition: "ย้ายตำแหน่ง",
      shapeMode: "โหมดรูปร่าง",
      crudMode: "โหมด CRUD",
      name: "ชื่อ",
      age: "อายุ",
      action: "จัดการ",
      submit: "บันทึก",
      update: "อัปเดต",
      edit: "แก้ไข",
      delete: "ลบ",
      placeholderName: "กรอกชื่อ",
      placeholderAge: "กรอกอายุ",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
