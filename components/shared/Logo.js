export default function Logo({ className="" }){
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
      <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#2b86ff"/><stop offset="100%" stopColor="#112f61"/></linearGradient></defs>
      <rect width="128" height="128" rx="24" fill="url(#g)"/>
      <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontSize="56" fontFamily="Arial" fill="white">Pi</text>
    </svg>
  );
}
