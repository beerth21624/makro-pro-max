"use client";

import { Button, Timeline } from "flowbite-react";
import { HiArrowNarrowRight } from "react-icons/hi";

export default function TimeLine() {
  return (
    <Timeline>
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Title>เลือกประเภทอาหารที่คุณต้องการ</Timeline.Title>
          <Timeline.Body>
            <p>
              เลือกประเภทอาหารที่คุณต้องการและระบบจะแสดงสินค้าที่เกี่ยวข้องกับประเภทอาหารที่คุณเลือก
            </p>
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Title>เล</Timeline.Title>
          <Timeline.Body>
            <p>
              All of the pages and components are first designed in Figma and we
              keep a parity between the two versions even as we update the
              project.
            </p>
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Title>E-Commerce UI code in Tailwind CSS</Timeline.Title>
          <Timeline.Body>
            <p>
              Get started with dozens of web components and interactive elements
              built on top of Tailwind CSS.
            </p>
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
  );
}
