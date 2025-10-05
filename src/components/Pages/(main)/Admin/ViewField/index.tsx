type ViewFieldProps = {
  label: string;
  value: string;
  multiline?: boolean;
};

const ViewField = ({ label, value, multiline = false }: ViewFieldProps) => {
  return (
    <div
      className="flex w-full cursor-default flex-col gap-1"
      style={{
        minHeight: multiline ? 0 : undefined,
        flex: multiline ? 1 : undefined,
      }}
    >
      <span className="text-neutral-60 font-roboto text-xl font-normal">
        {label}
      </span>

      <div
        className="border-neutral-40 rounded-lg border bg-white px-3 py-2"
        style={{
          whiteSpace: 'pre-wrap',
          overflow: multiline ? 'auto' : 'hidden',
          flex: multiline ? 1 : undefined,
          minHeight: 0,
        }}
      >
        <code className="text-neutral-60 font-roboto text-base">{value}</code>
      </div>
    </div>
  );
};

export default ViewField;
