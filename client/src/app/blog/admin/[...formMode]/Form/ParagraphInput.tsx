import { Field } from "formik"

const ParagraphInput = ({index, handleRemoveParagraph} : {index: number, handleRemoveParagraph: (index: number) => void }) => {
  const checkDeleteParagraph = () => {
    const validation = confirm('¿Está seguro que desea borrar el párrafo?')
    if(validation){
      handleRemoveParagraph(index)
    }
  }
  return (
    <div className="flex flex-col gap-2 w-full mb-8">
        <label htmlFor={`body[${index}].subtitle`}>Párrafo {index + 1}</label>
        <Field
          id={`body[${index}].subtitle`}
          name={`body[${index}].subtitle`}
          placeholder="Subtítulo del párrafo (opcional)"
          className="input"
        />
        <Field
          id={`body[${index}].text`}
          name={`body[${index}].text`}
          placeholder="Texto del párrafo"
          className="flex-1 input resize-none min-h-[250px] pr-2"
          as="textarea"
        />
        <label htmlFor={`body[${index}].imgParagraph.href`}>Imagen del párrafo (opcional)</label>
        <Field
          id={`body[${index}].imgParagraph.href`}
          name={`body[${index}].imgParagraph.href`}
          type="file"
          className="input"
          />
        <Field
          id={`body[${index}].imgParagraph.epigraph`}
          name={`body[${index}].imgParagraph.epigraph`}
          placeholder="Epígrafe (opcional)"
          className="input"
        />
        <button
            type="button"
            className="btn-secondary py-1 text-sm rounded-3xl self-start border-red-400 hover:border-red-700"
            onClick={checkDeleteParagraph}
          >
            Borrar párrafo
        </button>
      </div>
  )
}

export default ParagraphInput