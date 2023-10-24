import DeviceCard from "@/app/components/DeviceCard";

import getDeviceListByBrand from "@/api/getDeviceListByBrand";
import Link from "next/link";
const placeholder = [
  
  {
    id: "samsung_galaxy_j5_(2017)-8705",
    name: "Galaxy J5 (2017)",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-j5-2017-sm-j530.jpg",
    description:
      "Samsung Galaxy J5 (2017) Android smartphone. Announced Jun 2017. Features 5.2″  display, Exynos 7870 Octa chipset, 13 MP primary camera, 13 MP front camera, 3000 mAh battery, 32 GB storage, 3 GB RAM.",
  },
  {
    id: "samsung_galaxy_j3_(2017)-8438",
    name: "Galaxy J3 (2017)",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-j3-2017.jpg",
    description:
      "Samsung Galaxy J3 (2017) Android smartphone. Announced Jun 2017. Features 5.0″  display, Exynos 7570 Quad chipset, 13 MP primary camera, 5 MP front camera, 2400 mAh battery, 16 GB storage, 2 GB RAM.",
  },
  {
    id: "samsung_galaxy_folder2-9331",
    name: "Galaxy Folder2",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-folder2-g165.jpg",
    description:
      "Samsung Galaxy Folder2 Android smartphone. Announced Jul 2017. Features 3.8″  display, Snapdragon 425 chipset, 8 MP primary camera, 2 MP front camera, 1950 mAh battery, 32 GB storage, 3 GB RAM.",
  },
  {
    id: "samsung_z4-8682",
    name: "Z4",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-z4.jpg",
    description:
      "Samsung Z4 smartphone. Announced May 2017. Features 4.5″  display, 5 MP primary camera, 5 MP front camera, 2050 mAh battery, 8 GB storage, 1000 MB RAM.",
  },
  {
    id: "samsung_galaxy_s8-8161",
    name: "Galaxy S8",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s8-.jpg",
    description:
      "Samsung Galaxy S8 Android smartphone. Announced Mar 2017. Features 5.8″  display, Exynos 8895 chipset, 12 MP primary camera, 8 MP front camera, 3000 mAh battery, 64 GB storage, 4 GB RAM, Corning Gorilla Glass 5.",
  },
  {
    id: "samsung_galaxy_s8+-8523",
    name: "Galaxy S8+",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s8-plus-.jpg",
    description:
      "Samsung Galaxy S8+ Android smartphone. Announced Mar 2017. Features 6.2″  display, Exynos 8895 chipset, 12 MP primary camera, 8 MP front camera, 3500 mAh battery, 128 GB storage, 6 GB RAM, Corning Gorilla Glass 5.",
  },
  {
    id: "samsung_gear_s3_classic_lte-8627",
    name: "Gear S3 classic LTE",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-gear-s3-classic-lte.jpg",
    description:
      "Samsung Gear S3 classic LTE watch. Announced Mar 2017. Features 1.3″  display, Exynos 7 Dual 7270 chipset, 380 mAh battery, 4 GB storage, 768 MB RAM, Corning Gorilla Glass SR+.",
  },
  {
    id: "samsung_galaxy_c5_pro-8437",
    name: "Galaxy C5 Pro",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-c5-pro-sm-c5010.jpg",
    description:
      "Samsung Galaxy C5 Pro Android smartphone. Announced Mar 2017. Features 5.2″  display, Snapdragon 626 chipset, 16 MP primary camera, 16 MP front camera, 2600 mAh battery, 64 GB storage, 4 GB RAM, Corning Gorilla Glass 4.",
  },
  {
    id: "samsung_galaxy_xcover_4-8577",
    name: "Galaxy Xcover 4",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-xcover4-g390f-.jpg",
    description:
      "Samsung Galaxy Xcover 4 Android smartphone. Announced Mar 2017. Features 5.0″  display, Exynos 7570 Quad chipset, 13 MP primary camera, 5 MP front camera, 2800 mAh battery, 16 GB storage, 2 GB RAM, MIL-STD-810G compliant.",
  },
  {
    id: "samsung_galaxy_tab_s3_9_7-8554",
    name: "Galaxy Tab S3 9.7",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-tab-s3-97-sm-t825.jpg",
    description:
      "Samsung Galaxy Tab S3 9.7 Android tablet. Announced Feb 2017. Features 9.7″  display, Snapdragon 820 chipset, 13 MP primary camera, 5 MP front camera, 6000 mAh battery, 128 GB storage, 4 GB RAM.",
  },
  {
    id: "samsung_galaxy_j1_mini_prime-8397",
    name: "Galaxy J1 mini prime",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-j1-nxt.jpg",
    description:
      "Samsung Galaxy J1 mini prime Android smartphone. Announced Dec 2016. Features 4.0″  display, Spreadtrum SC9830 chipset, 5 MP primary camera, 1500 mAh battery, 8 GB storage, 1000 MB RAM.",
  },
  {
    id: "samsung_galaxy_j3_emerge-8486",
    name: "Galaxy J3 Emerge",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-j3-emerge-.jpg",
    description:
      "Samsung Galaxy J3 Emerge Android smartphone. Announced Jan 2017. Features 5.0″  display, Snapdragon 430 chipset, 5 MP primary camera, 2 MP front camera, 2600 mAh battery, 16 GB storage, 1.5 GB RAM.",
  },
  {
    id: "samsung_galaxy_c7_pro-8435",
    name: "Galaxy C7 Pro",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-c7-pro.jpg",
    description:
      "Samsung Galaxy C7 Pro Android smartphone. Announced Jan 2017. Features 5.7″  display, Snapdragon 626 chipset, 16 MP primary camera, 16 MP front camera, 3300 mAh battery, 64 GB storage, 4 GB RAM, Corning Gorilla Glass 4.",
  },
  {
    id: "samsung_galaxy_a7_(2017)-8335",
    name: "Galaxy A7 (2017)",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a7-2017.jpg",
    description:
      "Samsung Galaxy A7 (2017) Android smartphone. Announced Jan 2017. Features 5.7″  display, Exynos 7880 chipset, 16 MP primary camera, 16 MP front camera, 3600 mAh battery, 32 GB storage, 3 GB RAM, Corning Gorilla Glass 4.",
  },
  {
    id: "samsung_galaxy_a5_(2017)-8494",
    name: "Galaxy A5 (2017)",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a5-2017-new.jpg",
    description:
      "Samsung Galaxy A5 (2017) Android smartphone. Announced Jan 2017. Features 5.2″  display, Exynos 7880 chipset, 16 MP primary camera, 16 MP front camera, 3000 mAh battery, 64 GB storage, 3 GB RAM, Corning Gorilla Glass 4.",
  },
  {
    id: "samsung_galaxy_a3_(2017)-8336",
    name: "Galaxy A3 (2017)",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a3-2017.jpg",
    description:
      "Samsung Galaxy A3 (2017) Android smartphone. Announced Jan 2017. Features 4.7″  display, Exynos 7870 Octa chipset, 13 MP primary camera, 8 MP front camera, 2350 mAh battery, 16 GB storage, 2 GB RAM, Corning Gorilla Glass 4.",
  },
  {
    id: "samsung_galaxy_grand_prime_plus-8385",
    name: "Galaxy Grand Prime Plus",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-j2-prime-2016.jpg",
    description:
      "Samsung Galaxy Grand Prime Plus Android smartphone. Announced Nov 2016. Features 5.0″  display, MT6737T chipset, 8 MP primary camera, 5 MP front camera, 2600 mAh battery, 16 GB storage, 1.5 GB RAM.",
  },
  {
    id: "samsung_galaxy_j2_prime-8424",
    name: "Galaxy J2 Prime",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-j2-prime-2016.jpg",
    description:
      "Samsung Galaxy J2 Prime Android smartphone. Announced Nov 2016. Features 5.0″  display, MT6737T chipset, 8 MP primary camera, 5 MP front camera, 2600 mAh battery, 16 GB storage, 1.5 GB RAM.",
  },
  {
    id: "samsung_galaxy_j2_(2017)-8900",
    name: "Galaxy J2 (2017)",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-j2-2017-j200g.jpg",
    description:
      "Samsung Galaxy J2 (2017) Android smartphone. Announced Oct 2017. Features 4.7″  display, Exynos 3475 Quad chipset, 5 MP primary camera, 2 MP front camera, 2000 mAh battery, 8 GB storage, 1000 MB RAM.",
  },
  {
    id: "samsung_galaxy_tab_active_2-8897",
    name: "Galaxy Tab Active 2",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-tab-active2.jpg",
    description:
      "Samsung Galaxy Tab Active 2 Android tablet. Announced Oct 2017. Features 8.0″  display, Exynos 7870 Octa chipset, 8 MP primary camera, 5 MP front camera, 4450 mAh battery, 16 GB storage, 3 GB RAM, MIL-STD-810G compliant.",
  },
  {
    id: "samsung_galaxy_tab_a_8_0_(2017)-8725",
    name: "Galaxy Tab A 8.0 (2017)",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-tab-a-8-0-2017-t385-sm-t385.jpg",
    description:
      "Samsung Galaxy Tab A 8.0 (2017) Android tablet. Announced Sep 2017. Features 8.0″  display, Snapdragon 425 chipset, 8 MP primary camera, 5 MP front camera, 5000 mAh battery, 32 GB storage, 2 GB RAM.",
  },
  {
    id: "samsung_galaxy_c7_(2017)-8789",
    name: "Galaxy C7 (2017)",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-c7-2017.jpg",
    description:
      "Samsung Galaxy C7 (2017) Android smartphone. Announced Sep 2017. Features 5.5″  display, Dual: 13 MP (f/1.7, AF) + 5 MP primary camera, 16 MP front camera, 3000 mAh battery, 32 GB storage, 4 GB RAM.",
  },
  {
    id: "samsung_gear_sport-8839",
    name: "Gear Sport",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-gear-sport1.jpg",
    description:
      "Samsung Gear Sport watch. Announced Aug 2017. Features 1.2″  display, Exynos 3250 Dual chipset, 300 mAh battery, 4 GB storage, 768 MB RAM, MIL-STD-810G compliant, Corning Gorilla Glass 3.",
  },
  {
    id: "samsung_galaxy_note8-8505",
    name: "Galaxy Note8",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-note-8-sm-n950.jpg",
    description:
      "Samsung Galaxy Note8 Android smartphone. Announced Aug 2017. Features 6.3″  display, Exynos 8895 chipset, 3300 mAh battery, 256 GB storage, 6 GB RAM, Corning Gorilla Glass 5.",
  },
  {
    id: "samsung_galaxy_s8_active-8676",
    name: "Galaxy S8 Active",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s8-active.jpg",
    description:
      "Samsung Galaxy S8 Active Android smartphone. Announced Aug 2017. Features 5.8″  display, Snapdragon 835 chipset, 12 MP primary camera, 8 MP front camera, 4000 mAh battery, 64 GB storage, 4 GB RAM, MIL-STD-810G compliant, Corning Gorilla Glass 5.",
  },
  {
    id: "samsung_galaxy_j7_v-8778",
    name: "Galaxy J7 V",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-j7-v-2017.jpg",
    description:
      "Samsung Galaxy J7 V Android smartphone. Announced Mar 2017. Features 5.5″  display, Snapdragon 625 chipset, 8 MP primary camera, 5 MP front camera, 3300 mAh battery, 16 GB storage, 2 GB RAM.",
  },
  {
    id: "samsung_galaxy_note_fe-8683",
    name: "Galaxy Note FE",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-note-fe1.jpg",
    description:
      "Samsung Galaxy Note FE Android smartphone. Announced Jul 2017. Features 5.7″  display, Exynos 8890 Octa chipset, 12 MP primary camera, 5 MP front camera, 3200 mAh battery, 64 GB storage, 4 GB RAM, Corning Gorilla Glass 5.",
  },
  {
    id: "samsung_galaxy_j7_max-8684",
    name: "Galaxy J7 Max",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-j7-max.jpg",
    description:
      "Samsung Galaxy J7 Max Android smartphone. Announced Jun 2017. Features 5.7″  display, MT6757 Helio P20 chipset, 13 MP primary camera, 13 MP front camera, 3300 mAh battery, 32 GB storage, 4 GB RAM.",
  },
  {
    id: "samsung_galaxy_j7_(2017)-8675",
    name: "Galaxy J7 (2017)",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-j7-2017-sm-j730f.jpg",
    description:
      "Samsung Galaxy J7 (2017) Android smartphone. Announced Jun 2017. Features 5.5″  display, Exynos 7870 Octa chipset, 13 MP primary camera, 13 MP front camera, 3600 mAh battery, 16 GB storage, 3 GB RAM.",
  },
  {
    id: "samsung_galaxy_j7_pro-8561",
    name: "Galaxy J7 Pro",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-j7-pro.jpg",
    description:
      "Samsung Galaxy J7 Pro Android smartphone. Announced Jun 2017. Features 5.5″  display, Exynos 7870 Octa chipset, 13 MP primary camera, 13 MP front camera, 3600 mAh battery, 64 GB storage, 3 GB RAM.",
  },
  {
    id: "samsung_galaxy_j5_(2017)-8705",
    name: "Galaxy J5 (2017)",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-j5-2017-sm-j530.jpg",
    description:
      "Samsung Galaxy J5 (2017) Android smartphone. Announced Jun 2017. Features 5.2″  display, Exynos 7870 Octa chipset, 13 MP primary camera, 13 MP front camera, 3000 mAh battery, 32 GB storage, 3 GB RAM.",
  },
  {
    id: "samsung_galaxy_j3_(2017)-8438",
    name: "Galaxy J3 (2017)",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-j3-2017.jpg",
    description:
      "Samsung Galaxy J3 (2017) Android smartphone. Announced Jun 2017. Features 5.0″  display, Exynos 7570 Quad chipset, 13 MP primary camera, 5 MP front camera, 2400 mAh battery, 16 GB storage, 2 GB RAM.",
  },
  {
    id: "samsung_galaxy_folder2-9331",
    name: "Galaxy Folder2",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-folder2-g165.jpg",
    description:
      "Samsung Galaxy Folder2 Android smartphone. Announced Jul 2017. Features 3.8″  display, Snapdragon 425 chipset, 8 MP primary camera, 2 MP front camera, 1950 mAh battery, 32 GB storage, 3 GB RAM.",
  },
  {
    id: "samsung_z4-8682",
    name: "Z4",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-z4.jpg",
    description:
      "Samsung Z4 smartphone. Announced May 2017. Features 4.5″  display, 5 MP primary camera, 5 MP front camera, 2050 mAh battery, 8 GB storage, 1000 MB RAM.",
  },
  {
    id: "samsung_galaxy_s8-8161",
    name: "Galaxy S8",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s8-.jpg",
    description:
      "Samsung Galaxy S8 Android smartphone. Announced Mar 2017. Features 5.8″  display, Exynos 8895 chipset, 12 MP primary camera, 8 MP front camera, 3000 mAh battery, 64 GB storage, 4 GB RAM, Corning Gorilla Glass 5.",
  },
  {
    id: "samsung_galaxy_s8+-8523",
    name: "Galaxy S8+",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s8-plus-.jpg",
    description:
      "Samsung Galaxy S8+ Android smartphone. Announced Mar 2017. Features 6.2″  display, Exynos 8895 chipset, 12 MP primary camera, 8 MP front camera, 3500 mAh battery, 128 GB storage, 6 GB RAM, Corning Gorilla Glass 5.",
  },
  {
    id: "samsung_gear_s3_classic_lte-8627",
    name: "Gear S3 classic LTE",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-gear-s3-classic-lte.jpg",
    description:
      "Samsung Gear S3 classic LTE watch. Announced Mar 2017. Features 1.3″  display, Exynos 7 Dual 7270 chipset, 380 mAh battery, 4 GB storage, 768 MB RAM, Corning Gorilla Glass SR+.",
  },
  {
    id: "samsung_galaxy_c5_pro-8437",
    name: "Galaxy C5 Pro",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-c5-pro-sm-c5010.jpg",
    description:
      "Samsung Galaxy C5 Pro Android smartphone. Announced Mar 2017. Features 5.2″  display, Snapdragon 626 chipset, 16 MP primary camera, 16 MP front camera, 2600 mAh battery, 64 GB storage, 4 GB RAM, Corning Gorilla Glass 4.",
  },
  {
    id: "samsung_galaxy_xcover_4-8577",
    name: "Galaxy Xcover 4",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-xcover4-g390f-.jpg",
    description:
      "Samsung Galaxy Xcover 4 Android smartphone. Announced Mar 2017. Features 5.0″  display, Exynos 7570 Quad chipset, 13 MP primary camera, 5 MP front camera, 2800 mAh battery, 16 GB storage, 2 GB RAM, MIL-STD-810G compliant.",
  },
  {
    id: "samsung_galaxy_tab_s3_9_7-8554",
    name: "Galaxy Tab S3 9.7",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-tab-s3-97-sm-t825.jpg",
    description:
      "Samsung Galaxy Tab S3 9.7 Android tablet. Announced Feb 2017. Features 9.7″  display, Snapdragon 820 chipset, 13 MP primary camera, 5 MP front camera, 6000 mAh battery, 128 GB storage, 4 GB RAM.",
  },
  {
    id: "samsung_galaxy_j1_mini_prime-8397",
    name: "Galaxy J1 mini prime",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-j1-nxt.jpg",
    description:
      "Samsung Galaxy J1 mini prime Android smartphone. Announced Dec 2016. Features 4.0″  display, Spreadtrum SC9830 chipset, 5 MP primary camera, 1500 mAh battery, 8 GB storage, 1000 MB RAM.",
  },
  {
    id: "samsung_galaxy_j3_emerge-8486",
    name: "Galaxy J3 Emerge",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-j3-emerge-.jpg",
    description:
      "Samsung Galaxy J3 Emerge Android smartphone. Announced Jan 2017. Features 5.0″  display, Snapdragon 430 chipset, 5 MP primary camera, 2 MP front camera, 2600 mAh battery, 16 GB storage, 1.5 GB RAM.",
  },
  {
    id: "samsung_galaxy_c7_pro-8435",
    name: "Galaxy C7 Pro",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-c7-pro.jpg",
    description:
      "Samsung Galaxy C7 Pro Android smartphone. Announced Jan 2017. Features 5.7″  display, Snapdragon 626 chipset, 16 MP primary camera, 16 MP front camera, 3300 mAh battery, 64 GB storage, 4 GB RAM, Corning Gorilla Glass 4.",
  },
  {
    id: "samsung_galaxy_a7_(2017)-8335",
    name: "Galaxy A7 (2017)",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a7-2017.jpg",
    description:
      "Samsung Galaxy A7 (2017) Android smartphone. Announced Jan 2017. Features 5.7″  display, Exynos 7880 chipset, 16 MP primary camera, 16 MP front camera, 3600 mAh battery, 32 GB storage, 3 GB RAM, Corning Gorilla Glass 4.",
  },
  {
    id: "samsung_galaxy_a5_(2017)-8494",
    name: "Galaxy A5 (2017)",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a5-2017-new.jpg",
    description:
      "Samsung Galaxy A5 (2017) Android smartphone. Announced Jan 2017. Features 5.2″  display, Exynos 7880 chipset, 16 MP primary camera, 16 MP front camera, 3000 mAh battery, 64 GB storage, 3 GB RAM, Corning Gorilla Glass 4.",
  },
  {
    id: "samsung_galaxy_a3_(2017)-8336",
    name: "Galaxy A3 (2017)",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a3-2017.jpg",
    description:
      "Samsung Galaxy A3 (2017) Android smartphone. Announced Jan 2017. Features 4.7″  display, Exynos 7870 Octa chipset, 13 MP primary camera, 8 MP front camera, 2350 mAh battery, 16 GB storage, 2 GB RAM, Corning Gorilla Glass 4.",
  },
  {
    id: "samsung_galaxy_grand_prime_plus-8385",
    name: "Galaxy Grand Prime Plus",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-j2-prime-2016.jpg",
    description:
      "Samsung Galaxy Grand Prime Plus Android smartphone. Announced Nov 2016. Features 5.0″  display, MT6737T chipset, 8 MP primary camera, 5 MP front camera, 2600 mAh battery, 16 GB storage, 1.5 GB RAM.",
  },
  {
    id: "samsung_galaxy_j2_prime-8424",
    name: "Galaxy J2 Prime",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-j2-prime-2016.jpg",
    description:
      "Samsung Galaxy J2 Prime Android smartphone. Announced Nov 2016. Features 5.0″  display, MT6737T chipset, 8 MP primary camera, 5 MP front camera, 2600 mAh battery, 16 GB storage, 1.5 GB RAM.",
  },
  {
    id: "samsung_galaxy_j2_(2017)-8900",
    name: "Galaxy J2 (2017)",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-j2-2017-j200g.jpg",
    description:
      "Samsung Galaxy J2 (2017) Android smartphone. Announced Oct 2017. Features 4.7″  display, Exynos 3475 Quad chipset, 5 MP primary camera, 2 MP front camera, 2000 mAh battery, 8 GB storage, 1000 MB RAM.",
  },
  {
    id: "samsung_galaxy_tab_active_2-8897",
    name: "Galaxy Tab Active 2",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-tab-active2.jpg",
    description:
      "Samsung Galaxy Tab Active 2 Android tablet. Announced Oct 2017. Features 8.0″  display, Exynos 7870 Octa chipset, 8 MP primary camera, 5 MP front camera, 4450 mAh battery, 16 GB storage, 3 GB RAM, MIL-STD-810G compliant.",
  },
  {
    id: "samsung_galaxy_tab_a_8_0_(2017)-8725",
    name: "Galaxy Tab A 8.0 (2017)",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-tab-a-8-0-2017-t385-sm-t385.jpg",
    description:
      "Samsung Galaxy Tab A 8.0 (2017) Android tablet. Announced Sep 2017. Features 8.0″  display, Snapdragon 425 chipset, 8 MP primary camera, 5 MP front camera, 5000 mAh battery, 32 GB storage, 2 GB RAM.",
  },
  {
    id: "samsung_galaxy_c7_(2017)-8789",
    name: "Galaxy C7 (2017)",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-c7-2017.jpg",
    description:
      "Samsung Galaxy C7 (2017) Android smartphone. Announced Sep 2017. Features 5.5″  display, Dual: 13 MP (f/1.7, AF) + 5 MP primary camera, 16 MP front camera, 3000 mAh battery, 32 GB storage, 4 GB RAM.",
  },
  {
    id: "samsung_gear_sport-8839",
    name: "Gear Sport",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-gear-sport1.jpg",
    description:
      "Samsung Gear Sport watch. Announced Aug 2017. Features 1.2″  display, Exynos 3250 Dual chipset, 300 mAh battery, 4 GB storage, 768 MB RAM, MIL-STD-810G compliant, Corning Gorilla Glass 3.",
  },
  {
    id: "samsung_galaxy_note8-8505",
    name: "Galaxy Note8",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-note-8-sm-n950.jpg",
    description:
      "Samsung Galaxy Note8 Android smartphone. Announced Aug 2017. Features 6.3″  display, Exynos 8895 chipset, 3300 mAh battery, 256 GB storage, 6 GB RAM, Corning Gorilla Glass 5.",
  },
  {
    id: "samsung_galaxy_s8_active-8676",
    name: "Galaxy S8 Active",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s8-active.jpg",
    description:
      "Samsung Galaxy S8 Active Android smartphone. Announced Aug 2017. Features 5.8″  display, Snapdragon 835 chipset, 12 MP primary camera, 8 MP front camera, 4000 mAh battery, 64 GB storage, 4 GB RAM, MIL-STD-810G compliant, Corning Gorilla Glass 5.",
  },
  {
    id: "samsung_galaxy_j7_v-8778",
    name: "Galaxy J7 V",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-j7-v-2017.jpg",
    description:
      "Samsung Galaxy J7 V Android smartphone. Announced Mar 2017. Features 5.5″  display, Snapdragon 625 chipset, 8 MP primary camera, 5 MP front camera, 3300 mAh battery, 16 GB storage, 2 GB RAM.",
  },
  {
    id: "samsung_galaxy_note_fe-8683",
    name: "Galaxy Note FE",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-note-fe1.jpg",
    description:
      "Samsung Galaxy Note FE Android smartphone. Announced Jul 2017. Features 5.7″  display, Exynos 8890 Octa chipset, 12 MP primary camera, 5 MP front camera, 3200 mAh battery, 64 GB storage, 4 GB RAM, Corning Gorilla Glass 5.",
  },
  {
    id: "samsung_galaxy_j7_max-8684",
    name: "Galaxy J7 Max",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-j7-max.jpg",
    description:
      "Samsung Galaxy J7 Max Android smartphone. Announced Jun 2017. Features 5.7″  display, MT6757 Helio P20 chipset, 13 MP primary camera, 13 MP front camera, 3300 mAh battery, 32 GB storage, 4 GB RAM.",
  },
  {
    id: "samsung_galaxy_j7_(2017)-8675",
    name: "Galaxy J7 (2017)",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-j7-2017-sm-j730f.jpg",
    description:
      "Samsung Galaxy J7 (2017) Android smartphone. Announced Jun 2017. Features 5.5″  display, Exynos 7870 Octa chipset, 13 MP primary camera, 13 MP front camera, 3600 mAh battery, 16 GB storage, 3 GB RAM.",
  },
  {
    id: "samsung_galaxy_j7_pro-8561",
    name: "Galaxy J7 Pro",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-j7-pro.jpg",
    description:
      "Samsung Galaxy J7 Pro Android smartphone. Announced Jun 2017. Features 5.5″  display, Exynos 7870 Octa chipset, 13 MP primary camera, 13 MP front camera, 3600 mAh battery, 64 GB storage, 3 GB RAM.",
  },
  {
    id: "samsung_galaxy_j5_(2017)-8705",
    name: "Galaxy J5 (2017)",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-j5-2017-sm-j530.jpg",
    description:
      "Samsung Galaxy J5 (2017) Android smartphone. Announced Jun 2017. Features 5.2″  display, Exynos 7870 Octa chipset, 13 MP primary camera, 13 MP front camera, 3000 mAh battery, 32 GB storage, 3 GB RAM.",
  },
  {
    id: "samsung_galaxy_j3_(2017)-8438",
    name: "Galaxy J3 (2017)",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-j3-2017.jpg",
    description:
      "Samsung Galaxy J3 (2017) Android smartphone. Announced Jun 2017. Features 5.0″  display, Exynos 7570 Quad chipset, 13 MP primary camera, 5 MP front camera, 2400 mAh battery, 16 GB storage, 2 GB RAM.",
  },
  {
    id: "samsung_galaxy_folder2-9331",
    name: "Galaxy Folder2",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-folder2-g165.jpg",
    description:
      "Samsung Galaxy Folder2 Android smartphone. Announced Jul 2017. Features 3.8″  display, Snapdragon 425 chipset, 8 MP primary camera, 2 MP front camera, 1950 mAh battery, 32 GB storage, 3 GB RAM.",
  },
  {
    id: "samsung_z4-8682",
    name: "Z4",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-z4.jpg",
    description:
      "Samsung Z4 smartphone. Announced May 2017. Features 4.5″  display, 5 MP primary camera, 5 MP front camera, 2050 mAh battery, 8 GB storage, 1000 MB RAM.",
  },
  {
    id: "samsung_galaxy_s8-8161",
    name: "Galaxy S8",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s8-.jpg",
    description:
      "Samsung Galaxy S8 Android smartphone. Announced Mar 2017. Features 5.8″  display, Exynos 8895 chipset, 12 MP primary camera, 8 MP front camera, 3000 mAh battery, 64 GB storage, 4 GB RAM, Corning Gorilla Glass 5.",
  },
  {
    id: "samsung_galaxy_s8+-8523",
    name: "Galaxy S8+",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s8-plus-.jpg",
    description:
      "Samsung Galaxy S8+ Android smartphone. Announced Mar 2017. Features 6.2″  display, Exynos 8895 chipset, 12 MP primary camera, 8 MP front camera, 3500 mAh battery, 128 GB storage, 6 GB RAM, Corning Gorilla Glass 5.",
  },
  {
    id: "samsung_gear_s3_classic_lte-8627",
    name: "Gear S3 classic LTE",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-gear-s3-classic-lte.jpg",
    description:
      "Samsung Gear S3 classic LTE watch. Announced Mar 2017. Features 1.3″  display, Exynos 7 Dual 7270 chipset, 380 mAh battery, 4 GB storage, 768 MB RAM, Corning Gorilla Glass SR+.",
  },
  {
    id: "samsung_galaxy_c5_pro-8437",
    name: "Galaxy C5 Pro",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-c5-pro-sm-c5010.jpg",
    description:
      "Samsung Galaxy C5 Pro Android smartphone. Announced Mar 2017. Features 5.2″  display, Snapdragon 626 chipset, 16 MP primary camera, 16 MP front camera, 2600 mAh battery, 64 GB storage, 4 GB RAM, Corning Gorilla Glass 4.",
  },
  {
    id: "samsung_galaxy_xcover_4-8577",
    name: "Galaxy Xcover 4",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-xcover4-g390f-.jpg",
    description:
      "Samsung Galaxy Xcover 4 Android smartphone. Announced Mar 2017. Features 5.0″  display, Exynos 7570 Quad chipset, 13 MP primary camera, 5 MP front camera, 2800 mAh battery, 16 GB storage, 2 GB RAM, MIL-STD-810G compliant.",
  },
  {
    id: "samsung_galaxy_tab_s3_9_7-8554",
    name: "Galaxy Tab S3 9.7",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-tab-s3-97-sm-t825.jpg",
    description:
      "Samsung Galaxy Tab S3 9.7 Android tablet. Announced Feb 2017. Features 9.7″  display, Snapdragon 820 chipset, 13 MP primary camera, 5 MP front camera, 6000 mAh battery, 128 GB storage, 4 GB RAM.",
  },
  {
    id: "samsung_galaxy_j1_mini_prime-8397",
    name: "Galaxy J1 mini prime",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-j1-nxt.jpg",
    description:
      "Samsung Galaxy J1 mini prime Android smartphone. Announced Dec 2016. Features 4.0″  display, Spreadtrum SC9830 chipset, 5 MP primary camera, 1500 mAh battery, 8 GB storage, 1000 MB RAM.",
  },
  {
    id: "samsung_galaxy_j3_emerge-8486",
    name: "Galaxy J3 Emerge",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-j3-emerge-.jpg",
    description:
      "Samsung Galaxy J3 Emerge Android smartphone. Announced Jan 2017. Features 5.0″  display, Snapdragon 430 chipset, 5 MP primary camera, 2 MP front camera, 2600 mAh battery, 16 GB storage, 1.5 GB RAM.",
  },
  {
    id: "samsung_galaxy_c7_pro-8435",
    name: "Galaxy C7 Pro",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-c7-pro.jpg",
    description:
      "Samsung Galaxy C7 Pro Android smartphone. Announced Jan 2017. Features 5.7″  display, Snapdragon 626 chipset, 16 MP primary camera, 16 MP front camera, 3300 mAh battery, 64 GB storage, 4 GB RAM, Corning Gorilla Glass 4.",
  },
  {
    id: "samsung_galaxy_a7_(2017)-8335",
    name: "Galaxy A7 (2017)",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a7-2017.jpg",
    description:
      "Samsung Galaxy A7 (2017) Android smartphone. Announced Jan 2017. Features 5.7″  display, Exynos 7880 chipset, 16 MP primary camera, 16 MP front camera, 3600 mAh battery, 32 GB storage, 3 GB RAM, Corning Gorilla Glass 4.",
  },
  {
    id: "samsung_galaxy_a5_(2017)-8494",
    name: "Galaxy A5 (2017)",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a5-2017-new.jpg",
    description:
      "Samsung Galaxy A5 (2017) Android smartphone. Announced Jan 2017. Features 5.2″  display, Exynos 7880 chipset, 16 MP primary camera, 16 MP front camera, 3000 mAh battery, 64 GB storage, 3 GB RAM, Corning Gorilla Glass 4.",
  },
  {
    id: "samsung_galaxy_a3_(2017)-8336",
    name: "Galaxy A3 (2017)",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a3-2017.jpg",
    description:
      "Samsung Galaxy A3 (2017) Android smartphone. Announced Jan 2017. Features 4.7″  display, Exynos 7870 Octa chipset, 13 MP primary camera, 8 MP front camera, 2350 mAh battery, 16 GB storage, 2 GB RAM, Corning Gorilla Glass 4.",
  },
  {
    id: "samsung_galaxy_grand_prime_plus-8385",
    name: "Galaxy Grand Prime Plus",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-j2-prime-2016.jpg",
    description:
      "Samsung Galaxy Grand Prime Plus Android smartphone. Announced Nov 2016. Features 5.0″  display, MT6737T chipset, 8 MP primary camera, 5 MP front camera, 2600 mAh battery, 16 GB storage, 1.5 GB RAM.",
  },
  {
    id: "samsung_galaxy_j2_prime-8424",
    name: "Galaxy J2 Prime",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-j2-prime-2016.jpg",
    description:
      "Samsung Galaxy J2 Prime Android smartphone. Announced Nov 2016. Features 5.0″  display, MT6737T chipset, 8 MP primary camera, 5 MP front camera, 2600 mAh battery, 16 GB storage, 1.5 GB RAM.",
  },
  {
    id: "samsung_galaxy_j2_(2017)-8900",
    name: "Galaxy J2 (2017)",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-j2-2017-j200g.jpg",
    description:
      "Samsung Galaxy J2 (2017) Android smartphone. Announced Oct 2017. Features 4.7″  display, Exynos 3475 Quad chipset, 5 MP primary camera, 2 MP front camera, 2000 mAh battery, 8 GB storage, 1000 MB RAM.",
  },
  {
    id: "samsung_galaxy_tab_active_2-8897",
    name: "Galaxy Tab Active 2",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-tab-active2.jpg",
    description:
      "Samsung Galaxy Tab Active 2 Android tablet. Announced Oct 2017. Features 8.0″  display, Exynos 7870 Octa chipset, 8 MP primary camera, 5 MP front camera, 4450 mAh battery, 16 GB storage, 3 GB RAM, MIL-STD-810G compliant.",
  },
  {
    id: "samsung_galaxy_tab_a_8_0_(2017)-8725",
    name: "Galaxy Tab A 8.0 (2017)",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-tab-a-8-0-2017-t385-sm-t385.jpg",
    description:
      "Samsung Galaxy Tab A 8.0 (2017) Android tablet. Announced Sep 2017. Features 8.0″  display, Snapdragon 425 chipset, 8 MP primary camera, 5 MP front camera, 5000 mAh battery, 32 GB storage, 2 GB RAM.",
  },
  {
    id: "samsung_galaxy_c7_(2017)-8789",
    name: "Galaxy C7 (2017)",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-c7-2017.jpg",
    description:
      "Samsung Galaxy C7 (2017) Android smartphone. Announced Sep 2017. Features 5.5″  display, Dual: 13 MP (f/1.7, AF) + 5 MP primary camera, 16 MP front camera, 3000 mAh battery, 32 GB storage, 4 GB RAM.",
  },
  {
    id: "samsung_gear_sport-8839",
    name: "Gear Sport",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-gear-sport1.jpg",
    description:
      "Samsung Gear Sport watch. Announced Aug 2017. Features 1.2″  display, Exynos 3250 Dual chipset, 300 mAh battery, 4 GB storage, 768 MB RAM, MIL-STD-810G compliant, Corning Gorilla Glass 3.",
  },
  {
    id: "samsung_galaxy_note8-8505",
    name: "Galaxy Note8",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-note-8-sm-n950.jpg",
    description:
      "Samsung Galaxy Note8 Android smartphone. Announced Aug 2017. Features 6.3″  display, Exynos 8895 chipset, 3300 mAh battery, 256 GB storage, 6 GB RAM, Corning Gorilla Glass 5.",
  },
  {
    id: "samsung_galaxy_s8_active-8676",
    name: "Galaxy S8 Active",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s8-active.jpg",
    description:
      "Samsung Galaxy S8 Active Android smartphone. Announced Aug 2017. Features 5.8″  display, Snapdragon 835 chipset, 12 MP primary camera, 8 MP front camera, 4000 mAh battery, 64 GB storage, 4 GB RAM, MIL-STD-810G compliant, Corning Gorilla Glass 5.",
  },
  {
    id: "samsung_galaxy_j7_v-8778",
    name: "Galaxy J7 V",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-j7-v-2017.jpg",
    description:
      "Samsung Galaxy J7 V Android smartphone. Announced Mar 2017. Features 5.5″  display, Snapdragon 625 chipset, 8 MP primary camera, 5 MP front camera, 3300 mAh battery, 16 GB storage, 2 GB RAM.",
  },
  {
    id: "samsung_galaxy_note_fe-8683",
    name: "Galaxy Note FE",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-note-fe1.jpg",
    description:
      "Samsung Galaxy Note FE Android smartphone. Announced Jul 2017. Features 5.7″  display, Exynos 8890 Octa chipset, 12 MP primary camera, 5 MP front camera, 3200 mAh battery, 64 GB storage, 4 GB RAM, Corning Gorilla Glass 5.",
  },
  {
    id: "samsung_galaxy_j7_max-8684",
    name: "Galaxy J7 Max",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-j7-max.jpg",
    description:
      "Samsung Galaxy J7 Max Android smartphone. Announced Jun 2017. Features 5.7″  display, MT6757 Helio P20 chipset, 13 MP primary camera, 13 MP front camera, 3300 mAh battery, 32 GB storage, 4 GB RAM.",
  },
  {
    id: "samsung_galaxy_j7_(2017)-8675",
    name: "Galaxy J7 (2017)",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-j7-2017-sm-j730f.jpg",
    description:
      "Samsung Galaxy J7 (2017) Android smartphone. Announced Jun 2017. Features 5.5″  display, Exynos 7870 Octa chipset, 13 MP primary camera, 13 MP front camera, 3600 mAh battery, 16 GB storage, 3 GB RAM.",
  },
  {
    id: "samsung_galaxy_j7_pro-8561",
    name: "Galaxy J7 Pro",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-j7-pro.jpg",
    description:
      "Samsung Galaxy J7 Pro Android smartphone. Announced Jun 2017. Features 5.5″  display, Exynos 7870 Octa chipset, 13 MP primary camera, 13 MP front camera, 3600 mAh battery, 64 GB storage, 3 GB RAM.",
  },
  {
    id: "samsung_galaxy_j5_(2017)-8705",
    name: "Galaxy J5 (2017)",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-j5-2017-sm-j530.jpg",
    description:
      "Samsung Galaxy J5 (2017) Android smartphone. Announced Jun 2017. Features 5.2″  display, Exynos 7870 Octa chipset, 13 MP primary camera, 13 MP front camera, 3000 mAh battery, 32 GB storage, 3 GB RAM.",
  },
  {
    id: "samsung_galaxy_j3_(2017)-8438",
    name: "Galaxy J3 (2017)",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-j3-2017.jpg",
    description:
      "Samsung Galaxy J3 (2017) Android smartphone. Announced Jun 2017. Features 5.0″  display, Exynos 7570 Quad chipset, 13 MP primary camera, 5 MP front camera, 2400 mAh battery, 16 GB storage, 2 GB RAM.",
  },
  {
    id: "samsung_galaxy_folder2-9331",
    name: "Galaxy Folder2",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-folder2-g165.jpg",
    description:
      "Samsung Galaxy Folder2 Android smartphone. Announced Jul 2017. Features 3.8″  display, Snapdragon 425 chipset, 8 MP primary camera, 2 MP front camera, 1950 mAh battery, 32 GB storage, 3 GB RAM.",
  },
  {
    id: "samsung_z4-8682",
    name: "Z4",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-z4.jpg",
    description:
      "Samsung Z4 smartphone. Announced May 2017. Features 4.5″  display, 5 MP primary camera, 5 MP front camera, 2050 mAh battery, 8 GB storage, 1000 MB RAM.",
  },
  {
    id: "samsung_galaxy_s8-8161",
    name: "Galaxy S8",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s8-.jpg",
    description:
      "Samsung Galaxy S8 Android smartphone. Announced Mar 2017. Features 5.8″  display, Exynos 8895 chipset, 12 MP primary camera, 8 MP front camera, 3000 mAh battery, 64 GB storage, 4 GB RAM, Corning Gorilla Glass 5.",
  },
  {
    id: "samsung_galaxy_s8+-8523",
    name: "Galaxy S8+",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s8-plus-.jpg",
    description:
      "Samsung Galaxy S8+ Android smartphone. Announced Mar 2017. Features 6.2″  display, Exynos 8895 chipset, 12 MP primary camera, 8 MP front camera, 3500 mAh battery, 128 GB storage, 6 GB RAM, Corning Gorilla Glass 5.",
  },
  {
    id: "samsung_gear_s3_classic_lte-8627",
    name: "Gear S3 classic LTE",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-gear-s3-classic-lte.jpg",
    description:
      "Samsung Gear S3 classic LTE watch. Announced Mar 2017. Features 1.3″  display, Exynos 7 Dual 7270 chipset, 380 mAh battery, 4 GB storage, 768 MB RAM, Corning Gorilla Glass SR+.",
  },
  {
    id: "samsung_galaxy_c5_pro-8437",
    name: "Galaxy C5 Pro",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-c5-pro-sm-c5010.jpg",
    description:
      "Samsung Galaxy C5 Pro Android smartphone. Announced Mar 2017. Features 5.2″  display, Snapdragon 626 chipset, 16 MP primary camera, 16 MP front camera, 2600 mAh battery, 64 GB storage, 4 GB RAM, Corning Gorilla Glass 4.",
  },
  {
    id: "samsung_galaxy_xcover_4-8577",
    name: "Galaxy Xcover 4",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-xcover4-g390f-.jpg",
    description:
      "Samsung Galaxy Xcover 4 Android smartphone. Announced Mar 2017. Features 5.0″  display, Exynos 7570 Quad chipset, 13 MP primary camera, 5 MP front camera, 2800 mAh battery, 16 GB storage, 2 GB RAM, MIL-STD-810G compliant.",
  },
  {
    id: "samsung_galaxy_tab_s3_9_7-8554",
    name: "Galaxy Tab S3 9.7",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-tab-s3-97-sm-t825.jpg",
    description:
      "Samsung Galaxy Tab S3 9.7 Android tablet. Announced Feb 2017. Features 9.7″  display, Snapdragon 820 chipset, 13 MP primary camera, 5 MP front camera, 6000 mAh battery, 128 GB storage, 4 GB RAM.",
  },
  {
    id: "samsung_galaxy_j1_mini_prime-8397",
    name: "Galaxy J1 mini prime",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-j1-nxt.jpg",
    description:
      "Samsung Galaxy J1 mini prime Android smartphone. Announced Dec 2016. Features 4.0″  display, Spreadtrum SC9830 chipset, 5 MP primary camera, 1500 mAh battery, 8 GB storage, 1000 MB RAM.",
  },
  {
    id: "samsung_galaxy_j3_emerge-8486",
    name: "Galaxy J3 Emerge",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-j3-emerge-.jpg",
    description:
      "Samsung Galaxy J3 Emerge Android smartphone. Announced Jan 2017. Features 5.0″  display, Snapdragon 430 chipset, 5 MP primary camera, 2 MP front camera, 2600 mAh battery, 16 GB storage, 1.5 GB RAM.",
  },
  {
    id: "samsung_galaxy_c7_pro-8435",
    name: "Galaxy C7 Pro",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-c7-pro.jpg",
    description:
      "Samsung Galaxy C7 Pro Android smartphone. Announced Jan 2017. Features 5.7″  display, Snapdragon 626 chipset, 16 MP primary camera, 16 MP front camera, 3300 mAh battery, 64 GB storage, 4 GB RAM, Corning Gorilla Glass 4.",
  },
  {
    id: "samsung_galaxy_a7_(2017)-8335",
    name: "Galaxy A7 (2017)",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a7-2017.jpg",
    description:
      "Samsung Galaxy A7 (2017) Android smartphone. Announced Jan 2017. Features 5.7″  display, Exynos 7880 chipset, 16 MP primary camera, 16 MP front camera, 3600 mAh battery, 32 GB storage, 3 GB RAM, Corning Gorilla Glass 4.",
  },
  {
    id: "samsung_galaxy_a5_(2017)-8494",
    name: "Galaxy A5 (2017)",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a5-2017-new.jpg",
    description:
      "Samsung Galaxy A5 (2017) Android smartphone. Announced Jan 2017. Features 5.2″  display, Exynos 7880 chipset, 16 MP primary camera, 16 MP front camera, 3000 mAh battery, 64 GB storage, 3 GB RAM, Corning Gorilla Glass 4.",
  },
  {
    id: "samsung_galaxy_a3_(2017)-8336",
    name: "Galaxy A3 (2017)",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a3-2017.jpg",
    description:
      "Samsung Galaxy A3 (2017) Android smartphone. Announced Jan 2017. Features 4.7″  display, Exynos 7870 Octa chipset, 13 MP primary camera, 8 MP front camera, 2350 mAh battery, 16 GB storage, 2 GB RAM, Corning Gorilla Glass 4.",
  },
  {
    id: "samsung_galaxy_grand_prime_plus-8385",
    name: "Galaxy Grand Prime Plus",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-j2-prime-2016.jpg",
    description:
      "Samsung Galaxy Grand Prime Plus Android smartphone. Announced Nov 2016. Features 5.0″  display, MT6737T chipset, 8 MP primary camera, 5 MP front camera, 2600 mAh battery, 16 GB storage, 1.5 GB RAM.",
  },
  {
    id: "samsung_galaxy_j2_prime-8424",
    name: "Galaxy J2 Prime",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-j2-prime-2016.jpg",
    description:
      "Samsung Galaxy J2 Prime Android smartphone. Announced Nov 2016. Features 5.0″  display, MT6737T chipset, 8 MP primary camera, 5 MP front camera, 2600 mAh battery, 16 GB storage, 1.5 GB RAM.",
  },
];
type Params = {
  params: {
    brandId: string;
    pageNumber: number;
  };
};

const CardsPage = async ({ params: { brandId, pageNumber } }: Params) => {
  const brandDevicesData: Promise<deviceListByBrand[]> =
    getDeviceListByBrand(brandId);
  const brandDevices = await brandDevicesData

  // Calculate the start and end indexes for the cards to display
  const cardsPerPage = 30;
  const startIndex = (pageNumber - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const totalPages = Math.ceil(brandDevices.length / cardsPerPage);

  const cardsToDisplay = brandDevices.slice(startIndex, endIndex);
  const pagesLinks = [];
  for (let i = 0; i < totalPages; i++) {
    pagesLinks.push(`${i + 1}`);
  }

  return (
    <>
    <div className=" flex flex-wrap justify-center custom_layout py-10 px-3 ">
      {cardsToDisplay.map((card, index) => {
        let isEven = index % 2 === 0;
        return (
          <DeviceCard
            deviceId={card.id}
            name={card.name}
            img={card.img}
            isEven={isEven}
          />
        );
      })}
      </div>

      <div className="flex flex-wrap justify-center max-w-5xl my-4 mx-auto     ">
        {pagesLinks.map((link, index) => {
          return (
            <Link key={index} href={link}
            className={(index+1) == pageNumber ? 'page active_page' : 'page'}
            >
              {link}
            </Link>
          );
        })}
      </div>
    
      </> 
       );
};

export default CardsPage;
