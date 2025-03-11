interface TitleProps {
  title: string;
}

export default function Title({ title }: TitleProps) {
  return (
    <div>
      <h2 className="text-4xl text-center mt-16 mb-8 text-white border-b-2 border-blue-500">
        {title}
      </h2>
    </div>
  );
}
