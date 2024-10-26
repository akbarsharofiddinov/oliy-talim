interface MenuItem {
  id: number;
  item_id: number;
  number: number;
  name_qr: string;
  name_uz: string;
  name_ru: string;
  slug: string;
  childrens: any[];
}

interface Menu {
  id: number;
  name_qr: string;
  name_uz: string;
  name_ru: string;
  slug: string;
  menu_items: MenuItem[];
}
