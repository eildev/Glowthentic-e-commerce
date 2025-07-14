const VoucherCodeApplyInSmallDevice = ({ isVoucherActive, voucherActive }) => {
    return (
        <div className="h-[100vh] w-full bg-[#1C1B1B] bg-opacity-60 fixed top-0 left-0 z-[90]">
            <div className="h-auto w-full bg-white fixed bottom-0 rounded-t-xl px-3 py-5">
                <div>
                    <h1 className="text-[#1C1B1B]">Voucher Code</h1>
                    <input
                        type="text"
                        placeholder="Enter Voucher Code"
                        className="p-4 border border-[#F4F5FD] rounded-lg mt-4 w-full placeholder:text-xs placeholder:font-normal"
                    />
                </div>
                <button
                    onClick={() => isVoucherActive(!voucherActive)}
                    className="w-full bg-[#FA8232] rounded-lg p-2 text-white mt-8"
                >
                    Apply
                </button>
                <button
                    onClick={() => isVoucherActive(!voucherActive)}
                    className="w-full bg-[#FA8232] rounded-lg p-2 text-white mt-2"
                >
                    cancel
                </button>
            </div>
        </div>
    );
};

export default VoucherCodeApplyInSmallDevice;