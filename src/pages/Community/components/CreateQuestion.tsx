import { useState, useRef } from "react";
import { useDarkTheme } from "../../../hooks/UseDarkTheme";
import ActionButton from "../../../components/ActionButton";

const CreateQuestion = () => {
  const { darkTheme } = useDarkTheme();
  const [images, setImages] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSelectImage = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const limit = 4 - images.length;

    const selectedFiles = files.slice(0, limit);
    const readers = selectedFiles.map(
      (file) =>
        new Promise<string>((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result as string);
          reader.readAsDataURL(file);
        })
    );

    Promise.all(readers).then((newImages) => {
      setImages((prev) => [...prev, ...newImages]);
    });
  };

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <form
      className={`${
        darkTheme ? "bg-surface-dark" : "bg-surface-light"
      } flex flex-col gap-4 rounded-xl p-6`}
    >
      <h2
        className={`${
          darkTheme ? "text-primary-dark" : "text-primary-light"
        } font-semibold text-xl`}
      >
        Faça sua Pergunta
      </h2>

      <input
        type="text"
        placeholder="Título da Pergunta"
        className={`${
          darkTheme
            ? "placeholder:text-muted-dark text-primary-dark bg-dark border-outline-dark"
            : "placeholder:text-muted-light bg-light text-primary-light border-outline-light"
        } rounded-lg px-4 py-2 outline-none border`}
      />

      <select
        className={`${
          darkTheme
            ? "placeholder:text-muted-dark text-primary-dark bg-dark border-outline-dark"
            : "placeholder:text-muted-light bg-light text-primary-light border-outline-light"
        } rounded-lg px-4 py-2 outline-none border`}
      >
        <option value="matematica">Matemática</option>
        <option value="fisica">Física</option>
        <option value="quimica">Química</option>
        <option value="biologia">Biologia</option>
        <option value="portugues">Português</option>
        <option value="historia">História</option>
      </select>

      <textarea
        placeholder="Descreva sua pergunta em detalhes"
        className={`${
          darkTheme
            ? "placeholder:text-muted-dark text-primary-dark bg-dark border-outline-dark"
            : "placeholder:text-muted-light bg-light text-primary-light border-outline-light"
        } h-32 rounded-lg px-4 py-2 outline-none border`}
      ></textarea>

      <input
        type="text"
        placeholder="Tags (separadas por vírgula)"
        className={`${
          darkTheme
            ? "placeholder:text-muted-dark text-primary-dark bg-dark border-outline-dark"
            : "placeholder:text-muted-light bg-light text-primary-light border-outline-light"
        } rounded-lg px-4 py-2 outline-none border`}
      />

      <input
        type="file"
        accept="image/*"
        multiple
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
      />

      {images.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-2">
          {images.map((img, index) => (
            <div key={index} className="relative">
              <img
                src={img}
                alt={`Prévia ${index + 1}`}
                className="w-full h-24 object-cover rounded-lg border"
              />
              <button
                type="button"
                onClick={() => removeImage(index)}
                className="absolute top-1 right-1 bg-black/60 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs cursor-pointer"
                title="Remover imagem"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="flex gap-4  flex-col sm:flex-row">
        <button
          type="button"
          onClick={handleSelectImage}
          disabled={images.length >= 4}
          className={`${
            darkTheme
              ? "bg-dark text-primary-dark"
              : "bg-card-light text-primary-light"
          } flex w-full max-w-50 cursor-pointer items-center justify-center gap-2 rounded-xl px-5 py-2 text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          <i className="bi bi-file-image" />
          {images.length >= 4 ? "Limite atingido" : "Adicionar Imagem"}
        </button>

        <div className="flex gap-4 w-full justify-start">
          <div className="w-50">
            <ActionButton label="Publicar Pergunta" />
          </div>
          <button
            type="button"
            className={`${
              darkTheme
                ? "bg-dark text-primary-dark"
                : "bg-card-light text-primary-light"
            } flex w-full max-w-32 cursor-pointer items-center justify-center gap-2 rounded-xl px-5 py-2 text-sm font-medium`}
          >
            Cancelar
          </button>
        </div>
      </div>
    </form>
  );
};

export default CreateQuestion;
