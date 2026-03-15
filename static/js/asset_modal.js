function openAssetModal(id, name, dept, loc, next) {
  document.getElementById('modalAssetID').textContent = id;
  document.getElementById('modalAssetName').textContent = name;
  document.getElementById('modalAssetDept').textContent = dept;
  document.getElementById('modalAssetLoc').textContent = loc;
  document.getElementById('modalAssetNext').textContent = next;
  document.getElementById('assetModal').classList.remove('hidden');
}
function closeAssetModal() {
  document.getElementById('assetModal').classList.add('hidden');
}
function verifyAsset() {
  alert("Asset verified!");
  closeAssetModal();
}

function showTab(tab) {
    const verified = document.getElementById('verified');
    const pending = document.getElementById('pending');
    const tabVerifiedBtn = document.getElementById('tabVerified');
    const tabPendingBtn = document.getElementById('tabPending');

    if(tab === 'verified') {
        verified.classList.remove('hidden');
        pending.classList.add('hidden');
        tabVerifiedBtn.classList.add('text-indigo-600', 'border-b-2', 'border-indigo-600');
        tabVerifiedBtn.classList.remove('text-gray-600');
        tabPendingBtn.classList.remove('text-indigo-600', 'border-b-2', 'border-indigo-600');
        tabPendingBtn.classList.add('text-gray-600');
    } else {
        verified.classList.add('hidden');
        pending.classList.remove('hidden');
        tabPendingBtn.classList.add('text-indigo-600', 'border-b-2', 'border-indigo-600');
        tabPendingBtn.classList.remove('text-gray-600');
        tabVerifiedBtn.classList.remove('text-indigo-600', 'border-b-2', 'border-indigo-600');
        tabVerifiedBtn.classList.add('text-gray-600');
    }
}
