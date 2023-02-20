import { CameraIcon } from 'web/public/CameraIcon'
import { CloseIcon } from 'web/public/CloseIcon'

import { Cover } from '../Avatar/Cover/Cover'

const UploadCover = ({
  clearValue,
  currentValue,
  fileInputName,
  getInputProps,
  getRootProps,
  label,
  name,
  registerReturn,
}) => {
  return (
    <div className="absolute -mt-[360px] object-center md:-mt-96 lg:ml-0">
      <Cover user={name} />
      <CameraIcon className="relative left-[35%] -mt-44 md:left-[40%]" />
      <CloseIcon className="relative left-[55%] -mt-20 md:left-[60%]" />
    </div>

    // <div className="mb-8 relative">
    //   {label && (
    //     <Label className="block" errorClassName="text-error" name={name}>
    //       {label}
    //     </Label>
    //   )}
    //   <div className="overflow-hidden cursor-pointer" {...getRootProps()}>
    //     <input name={name} type="hidden" {...registerReturn} />
    //     {currentValue && (
    //       <div className="rounded-sm border-1 border-gray-300 p-2 relative">
    //         <Button
    //           clickHandler={clearValue}
    //           className="absolute right-0 top-0 text-white bg-jumbo p-0.5"
    //           icon="close"
    //           iconSize="10"
    //         />
    //         <img
    //           className="object-contain h-24 w-72"
    //           alt={name}
    //           src={currentValue}
    //         />
    //       </div>
    //     )}
    //     {!currentValue && (
    //       <div
    //         className="font-dmsans rounded-sm border-1 border-gray-300 border-dashed h-16 p-2 justify-content-center relative-center w-full text-center"
    //         data-testid="uploadFieldImage"
    //       >
    //         <div className="justify-center flex text-sm text-gray-300 items-center">
    //           <Icon alt="upload" name="upload" height="16" width="24" />
    //         </div>
    //         <p className="inline text-gray-500 ">
    //           Drag and Drop Files here or{' '}
    //         </p>
    //         <label
    //           htmlFor={fileInputName}
    //           className="cursor-pointer bg-white rounded-md font-medium text-gray-500"
    //         >
    //           <span>Browse Files</span>
    //           <input
    //             className="sr-only"
    //             id={fileInputName}
    //             name={fileInputName}
    //             type="file"
    //             {...getInputProps()}
    //           />
    //         </label>
    //       </div>
    //     )}
    //   </div>
    // </div>
  )
}

export { UploadCover }
