  const dropArea = document.getElementById('dropArea');
  const photoInput = document.getElementById('photoEvidence');
  const photoPreview = document.getElementById('photoPreview');
  let images = [];

  // Open file picker when drop area is clicked
  dropArea.addEventListener('click', () => photoInput.click());

  // Handle file selection
  photoInput.addEventListener('change', e => handleFiles(e.target.files));

  // Handle drag & drop
  dropArea.addEventListener('dragover', e => {
    e.preventDefault();
    dropArea.classList.add('border-indigo-500');
  });

  dropArea.addEventListener('dragleave', e => {
    e.preventDefault();
    dropArea.classList.remove('border-indigo-500');
  });

  dropArea.addEventListener('drop', e => {
    e.preventDefault();
    dropArea.classList.remove('border-indigo-500');
    handleFiles(e.dataTransfer.files);
  });

  function handleFiles(files) {
    const selectedFiles = Array.from(files).slice(0, 5 - images.length);
    selectedFiles.forEach(file => {
      if (!file.type.startsWith('image/')) return;
      const reader = new FileReader();
      reader.onload = e => {
        const imgWrapper = document.createElement('div');
        imgWrapper.className = 'relative w-20 h-20 rounded-xl overflow-hidden border border-gray-300 shadow-sm';

        const img = document.createElement('img');
        img.src = e.target.result;
        img.className = 'w-full h-full object-cover';
        imgWrapper.appendChild(img);

        // Remove button
        const removeBtn = document.createElement('button');
        removeBtn.innerHTML = '&times;';
        removeBtn.className = 'absolute top-0 right-0 bg-red-500 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs hover:bg-red-600';
        removeBtn.addEventListener('click', () => {
          photoPreview.removeChild(imgWrapper);
          images = images.filter(f => f !== file);
        });
        imgWrapper.appendChild(removeBtn);

        photoPreview.appendChild(imgWrapper);
        images.push(file);
      };
      reader.readAsDataURL(file);
    });
  }
