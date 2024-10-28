export default function Hamburger({onOpen}) {
  return (
    <div onClick={onOpen}  className="fixed top-0 right-0 mt-10 mr-10 bg-cyan-400 p-2 rounded-lg hover:cursor-pointer z-10">
      <span class="block w-20 h-3 bg-slate-800 rounded-lg"></span>
      <span class="block w-20 h-3 my-2.5 bg-slate-800 rounded-lg"></span>
      <span class="block w-20 h-3 bg-slate-800 rounded-lg"></span>
    </div>
  );
}
