

export default function Footer(){
  return(
    <footer className="bg-gray-100 dark:bg-darkText py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 dark:text-white px-4">
        <p>© {new Date().getFullYear()} Data Science Club ENSA</p>
        {/* Intentionally left blank */}
      </div>
    </footer>
  )
}
