export const showToast = (operation, id) => {
  const toast = document.createElement('div');
  toast.className = `
    fixed top-5 right-5 z-50
    px-6 py-4 mb-4 rounded-lg shadow-lg
    text-white font-semibold
    animate-slide-in
    ${operation === 'add' ? 'bg-green-500' : 'bg-red-500'}
  `;

  toast.innerHTML = `
    <div class="flex items-center">
      <svg class="w-6 h-6 mr-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        ${operation === 'add' ? `
          <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zM10 17.2L5.8 13l1.4-1.4 2.8 2.8 6.8-6.8 1.4 1.4L10 17.2z"/>
        ` : `
          <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM13 17h-2v-2h2v2zm0-4h-2V7h2v6z"/>
        `}
      </svg>
      <span>
        ${operation === 'add' ? `Item #${id} added successfully!` : `Item #${id} removed.`}
      </span>
    </div>
  `;

  document.body.appendChild(toast);

  // Auto remove after 3 seconds
  setTimeout(() => {
    toast.classList.add('animate-slide-out');
    setTimeout(() => toast.remove(), 500); // wait for animation
  }, 3000);
};
