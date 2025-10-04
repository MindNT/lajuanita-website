const assetUrl = (path) => {
  // Si la ruta comienza con http o https, devolver la URL completa
  if (path.startsWith('http')) {
    return path;
  }
  
  // Obtener la URL base del sitio (homepage)
  const baseUrl = process.env.PUBLIC_URL || '';
  
  // Asegurarse que la ruta comience con /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  // Combinar la URL base con la ruta de la imagen
  return `${baseUrl}${normalizedPath}`;
};

const handleImgError = (e) => {
  // Imagen de respaldo en caso de error
  e.target.src = assetUrl('/images/placeholder.png');
  // Prevenir bucle infinito si la imagen de respaldo también falla
  e.target.onerror = null;
};

export { assetUrl, handleImgError };
