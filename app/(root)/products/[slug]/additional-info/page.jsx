export default function AdditionalInfo() {
    return (
        <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-700 border border-gray-300 rounded-3xl">
                <tbody>
                    <tr className="border-t">
                        <td className="p-4 pr-4 font-medium">Size</td>
                        <td className="p-4">30ml</td>
                    </tr>
                    <tr className="border-t">
                        <td className="p-4 pr-4 font-medium">Skin Type</td>
                        <td className="p-4">All skin types, including sensitive</td>
                    </tr>
                    <tr className="border-t">
                        <td className="p-4 pr-4 font-medium">Main Ingredients</td>
                        <td className="p-4">24k Gold Flakes, Rosehip Oil, Hyaluronic Acid</td>
                    </tr>
                    <tr className="border-t">
                        <td className="p-4 pr-4 font-medium">Texture</td>
                        <td className="p-4">Lightweight, fast-absorbing serum</td>
                    </tr>
                    <tr className="border-t border-b">
                        <td className="p-4 pr-4 font-medium">Fragrance</td>
                        <td className="p-4">Natural rose scent, no synthetic fragrance</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}