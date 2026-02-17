export const confirmAction = ({
    message = "Are you sure?",
    confirmText = "Yes",
    cancelText = "No",
    onConfirm,
}) => {
    toast((t) => (
        <div className="flex flex-col gap-2">
            <p>{message}</p>
            <div className="flex gap-2">
                <button
                    onClick={async () => {
                        toast.dismiss(t.id);
                        try {
                            await onConfirm();
                            toast.success("Action successful");
                        } catch {
                            toast.error("Action failed");
                        }
                    }
                    }
                    className="px-3 py-1 bg-red-500 text-white rounded"
                >
                    {confirmText}
                </button>
                <button
                    onClick={() => toast.dismiss(t.id)}
                    className="px-3 py-1 bg-gray-300 rounded"
                >
                    {cancelText}
                </button>
            </div>
        </div>
    ));
};
