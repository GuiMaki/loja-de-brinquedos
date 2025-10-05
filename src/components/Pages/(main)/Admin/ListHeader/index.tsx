const ListHeader = () => {
  return (
    <div className="border-neutral-80 flex border-b px-3 py-2">
      <span
        className="text-neutral-80 flex font-lexend text-2xl font-normal"
        style={{ width: '25%' }}
      >
        Produto
      </span>

      <span
        className="text-neutral-80 flex font-lexend text-2xl font-normal"
        style={{ width: '37%' }}
      >
        Descrição
      </span>

      <span
        className="text-neutral-80 flex font-lexend text-2xl font-normal"
        style={{ width: '16%' }}
      >
        Categorias
      </span>

      <span className="text-neutral-80 flex flex-1 justify-center font-lexend text-2xl font-normal">
        Valor
      </span>

      <span className="text-neutral-80 flex flex-1 justify-center font-lexend text-2xl font-normal">
        Ações
      </span>
    </div>
  );
};

export default ListHeader;
