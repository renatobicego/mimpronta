import { Field } from 'formik'
import React from 'react'
import ErrorMsg from '../ErrorMsg'

interface Category {
    _id: string,
    name: string
}

const SelectCategory = ({categories} : {categories: Array<Category>}) => {
  return (
    <div className="flex flex-col gap-1">
          <label htmlFor="category">Categoría</label>
          <Field
            id="category"
            className="input self-start min-w-[160px]"
            name="category"
            as="select"
          >
            <option value="" disabled hidden>
              Categoría
            </option>
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </Field>
          <ErrorMsg name='category' />
      </div>
  )
}

export default SelectCategory