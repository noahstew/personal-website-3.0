export default function Hamburger({onOpen}) {
  return (
    <div onClick={onOpen}>
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </div>
  );
}
