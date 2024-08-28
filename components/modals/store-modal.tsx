'use client'

import { useStoreModal } from "@/hooks/use-store-modal"
import Modal from "../ui/modal"

export const StoreModal = () => {

    const storeModal = useStoreModal();

    return (
        <Modal
            title="Buat Store"
            description="Tambahkan Store untuk membuat kategori dan produk"
            isOpen={storeModal.isOpen}
            onClose={storeModal.onClose}
        >
            Store Form
        </Modal>
    )
}