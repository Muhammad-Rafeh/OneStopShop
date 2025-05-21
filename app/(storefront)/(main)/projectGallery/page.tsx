"use client";
import { Gallery } from "react-grid-gallery";

const images = [
  {
    src: "/PIC 1.jpg",
    width: 'auto',
    height: 'auto',
    isSelected: false,
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: "/PIC 2.jpg",
   width: 'auto',
    height: 'auto',
    isSelected: false,
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: "/PIC 3.jpg",
 width: 'auto',
    height: 'auto',
    isSelected: false,
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: "/PIC 4.jpg",
 width: 'auto',
    height: 'auto',
    isSelected: false,
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: "/PIC 5.jpg",
    width: 'auto',
    height: 'auto',
    isSelected: false,
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: "/PIC 6.jpg",
  width: 'auto',
    height: 'auto',
    isSelected: false,
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: "/PIC 7.jpg",
    width: 'auto',
    height: 'auto',
    isSelected: false,
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: "/PIC 8.jpg",
  width: 'auto',
    height: 'auto',
    isSelected: false,
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: "/PIC 9.jpg",
    width: 'auto',
    height: 'auto',
    isSelected: false,
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: "/PIC 10.jpg",
 width: 'auto',
    height: 'auto',
    isSelected: false,
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: "/PIC 11.jpg",
    width: 'auto',
    height: 'auto',
    isSelected: false,
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: "/PIC 12.jpg",
    width: 'auto',
    height: 'auto',
    isSelected: false,
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: "/PIC 13.jpg",
 width: 'auto',
    height: 'auto',
    isSelected: false,
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: "/PIC 14.jpg",
    width: 'auto',
    height: 'auto',
    isSelected: false,
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: "/PIC 15.jpg",
   width: 'auto',
    height: 'auto',
    isSelected: false,
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: "/PIC 16.jpg",
   width: 'auto',
    height: 'auto',
    isSelected: false,
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
];

export default function ProjectGalleryPage() {
  return (
    <div className="w-full h-full m-auto max-w-[1000px]">
      <Gallery images={images as any} />
    </div>
  );
}
