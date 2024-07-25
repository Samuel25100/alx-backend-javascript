import ClassRoom from "./0-classroom.js";

export default function initializeRooms() {
  const list = [];
  list.push(new ClassRoom(19));
  list.push(new ClassRoom(20));
  list.push(new ClassRoom(34));
  return list;
}
