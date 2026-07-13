import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { productMatrixData, type ProductRow } from "../data/product-matrix-data";
import { X } from "lucide-react";

export function ProductMatrix() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<ProductRow | null>(null);

  // Filter data based on search
  const filteredData = productMatrixData.filter((row) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      row.productLevelOne.toLowerCase().includes(searchLower) ||
      row.productLevelTwo.toLowerCase().includes(searchLower)
    );
  });

  // Group rows by Product Level One for styling
  const groupedData = filteredData.reduce((acc, row, index) => {
    const prevRow = filteredData[index - 1];
    if (!prevRow || prevRow.productLevelOne !== row.productLevelOne) {
      acc.push({ isGroupStart: true, row, originalIndex: index });
    } else {
      acc.push({ isGroupStart: false, row, originalIndex: index });
    }
    return acc;
  }, [] as Array<{ isGroupStart: boolean; row: ProductRow; originalIndex: number }>);

  const renderCell = (content: string) => {
    if (!content) return <span className="text-gray-400">—</span>;
    
    // Check for YES/NO badges
    if (content === "YES") {
      return <Badge className="bg-green-600 hover:bg-green-700 text-white">YES</Badge>;
    }
    if (content === "NO") {
      return <Badge variant="secondary" className="bg-gray-400 text-white">NO</Badge>;
    }
    
    // All other text in normal black color
    return <span className="text-xs break-words whitespace-normal inline-block not-italic">{content}</span>;
  };

  return (
    <div className="w-full h-screen flex flex-col overflow-hidden bg-white">
      {/* Header */}
      <div className="flex-shrink-0 bg-gradient-to-r from-[#1e3a5f] to-[#2d5a8f] text-white p-4 shadow-lg">
        <div className="mx-auto">
          <h1 className="text-2xl mb-2">Product Matrix: Caroline's Galaxy</h1>
          <Input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-md bg-white text-gray-900 border-0 text-sm"
          />
        </div>
      </div>

      {/* Table */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden">
        <div className="w-full max-w-full">
          <Table className="table-fixed w-full">
            <colgroup>
              <col className="w-[9%]" />
              <col className="w-[9%]" />
              <col className="w-[4%]" />
              <col className="w-[6%]" />
              <col className="w-[3%]" />
              <col className="w-[10%]" />
              <col className="w-[11%]" />
              <col className="w-[3%]" />
              <col className="w-[10%]" />
              <col className="w-[11%]" />
              <col className="w-[3%]" />
              <col className="w-[10%]" />
              <col className="w-[11%]" />
            </colgroup>
            <TableHeader>
              {/* Main Header Row */}
              <TableRow className="bg-gradient-to-r from-[#1e3a5f] to-[#2d5a8f] hover:bg-gradient-to-r hover:from-[#1e3a5f] hover:to-[#2d5a8f]">
                <TableHead rowSpan={2} className="text-white border-r border-white/20 sticky left-0 bg-[#1e3a5f] z-20 text-xs p-1">
                  Product Level 1
                </TableHead>
                <TableHead rowSpan={2} className="text-white border-r border-white/20 text-xs p-1 text-center">
                  Product Level 2
                </TableHead>
                <TableHead rowSpan={2} className="text-white border-r border-white/20 text-xs p-1 text-center">
                  Go Live
                </TableHead>
                <TableHead rowSpan={2} className="text-white border-r border-white/20 text-xs p-1 text-center">
                  PM
                </TableHead>
                
                {/* Column Group 1 - Teal */}
                <TableHead colSpan={3} className="text-center bg-[#3a8599] text-[rgb(255,255,255)] border-r border-white/20 text-xs p-1 text-[14px]">
                  EAP
                </TableHead>
                
                {/* Column Group 2 - Green */}
                <TableHead colSpan={3} className="text-center bg-[#22805e] text-white border-r border-white/20 text-xs p-1 text-[14px]">
                  HEALTH FOUNDATIONS (INSURANCE ONLY)
                </TableHead>
                
                {/* Column Group 3 - Green */}
                <TableHead colSpan={3} className="text-center bg-[#4a90a4] text-white text-xs p-1 text-[14px]">
                  ACCESS
                </TableHead>
              </TableRow>
              
              {/* Sub Header Row */}
              <TableRow className="bg-gray-100">
                {/* Group 1 Headers - EAP (pastel blue shade) */}
                <TableHead className="border-r border-gray-300 text-[12px] p-1 text-center bg-[#2d6b7d] text-white">Incl.</TableHead>
                <TableHead className="border-r border-gray-300 text-[12px] p-1 bg-[#2d6b7d] text-white">Can Add for a Fee</TableHead>
                <TableHead className="border-r border-gray-300 text-[12px] p-1 bg-[#2d6b7d] text-white">Existing Change Mgmt</TableHead>
                
                {/* Group 2 Headers - HEALTH FOUNDATIONS (darker green) */}
                <TableHead className="border-r border-gray-300 text-[12px] p-1 text-center bg-[#1a6048] text-white">Incl.</TableHead>
                <TableHead className="border-r border-gray-300 text-[12px] p-1 bg-[#1a6048] text-white">Can Add for a Fee</TableHead>
                <TableHead className="border-r border-gray-300 text-[12px] p-1 text-center bg-[#1a6048] text-white">Existing Change Mgmt</TableHead>
                
                {/* Group 3 Headers - ACCESS (darker slate blue) */}
                <TableHead className="border-r border-gray-300 text-[12px] p-1 text-center bg-[#3a7085] text-white">Incl.</TableHead>
                <TableHead className="border-r border-gray-300 text-[12px] p-1 bg-[#3a7085] text-white">Can Add for a Fee</TableHead>
                <TableHead className="text-[12px] p-1 bg-[#3a7085] text-white">Existing Change Mgmt</TableHead>
              </TableRow>
            </TableHeader>
            
            <TableBody>
              {groupedData.map(({ isGroupStart, row, originalIndex }, idx) => {
                const productGroup = row.productLevelOne;
                let rowSpan = 0;
                
                if (isGroupStart) {
                  rowSpan = 1;
                
                  for (
                    let i = idx + 1;
                    i < groupedData.length &&
                    groupedData[i].row.productLevelOne === productGroup;
                    i++
                  ) {
                    rowSpan++;
                  }
                }
                
                // Alternate row colors by group
                const groupIndex = productMatrixData.findIndex(r => r.productLevelOne === productGroup && r.productLevelTwo === productMatrixData.find(item => item.productLevelOne === productGroup)?.productLevelTwo);
                const uniqueGroups = Array.from(new Set(productMatrixData.map(r => r.productLevelOne)));
                const actualGroupIndex = uniqueGroups.indexOf(productGroup);
                const bgColor = actualGroupIndex % 2 === 0 ? "bg-white" : "bg-gray-50";
                
                return (
                  <TableRow 
                    key={originalIndex} 
                    className={`${bgColor} hover:bg-blue-50/50`}
                  >
                    {isGroupStart && (
                      <TableCell
                        rowSpan={rowSpan}
                        className="align-top border-r border-gray-300 sticky left-0 z-10 bg-[#1e3a5f] text-white p-1 w-[9%] break-words"
                      >
                        <div className="py-1">
                          <span className="text-xs uppercase tracking-wide leading-tight block break-words whitespace-normal">{row.productLevelOne}</span>
                        </div>
                      </TableCell>
                    )}
                    <TableCell 
                      className="border-r border-gray-300 text-xs p-1 break-words whitespace-normal w-[9%] cursor-pointer hover:bg-blue-100 hover:underline"
                      onClick={() => setSelectedProduct(row)}
                    >
                      {row.productLevelTwo}
                    </TableCell>
                    <TableCell className="border-r border-gray-300 text-[12px] p-1 w-[7%] text-center whitespace-normal break-words">
                      {row.goLiveDate === "Available now" ? (
                        <div className="inline-flex items-center gap-1 bg-green-100 text-green-800 px-2 py-0.5 rounded-full border border-green-300">
                          <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                          <span className="font-semibold text-[10px]">Live</span>
                        </div>
                      ) : row.goLiveDate === "Special handle" ? (
                        <div className="inline-flex items-center gap-1 bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full border border-yellow-300">
                          <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full"></div>
                          <span className="font-semibold text-[10px]">Special handle</span>
                        </div>
                      ) : (
                        row.goLiveDate
                      )}
                    </TableCell>
                    <TableCell className="border-r border-gray-300 text-[12px] p-1 w-[7%] text-center whitespace-normal break-words">
                      {row.productManager && (
                        <a
                          href={`mailto:${row.productManager.email}`}
                          className="text-sm text-blue-600 hover:text-blue-800 font-medium underline"
                        >
                          {row.productManager.name}
                        </a>
                      )}
                    </TableCell>
                    
                    {/* Core PEPM Group */}
                    <TableCell className="border-r border-gray-300 pl-1 pr-2 py-1 whitespace-nowrap w-[5%] text-center">{renderCell(row.includedInCorePEPM)}</TableCell>
                    <TableCell 
                      className={`border-r border-gray-300 p-1 w-[10%] ${row.canAddIntoProgramWithFee1 ? 'bg-white' : 'bg-gray-100'} ${row.canAddIntoProgramWithFee1Url ? 'cursor-pointer hover:bg-blue-50' : ''}`}
                      onClick={row.canAddIntoProgramWithFee1Url ? () => window.open(row.canAddIntoProgramWithFee1Url, '_blank') : undefined}
                    >
                      <div className={`text-[9px] leading-tight break-words whitespace-normal ${row.canAddIntoProgramWithFee1Url ? 'text-blue-600 underline flex items-center gap-1' : ''}`}>
                        {row.canAddIntoProgramWithFee1 && renderCell(row.canAddIntoProgramWithFee1)}
                        {row.canAddIntoProgramWithFee1 && row.canAddIntoProgramWithFee1Url && (
                          <svg className="w-2.5 h-2.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        )}
                      </div>
                    </TableCell>
                    <TableCell className={`border-r border-gray-300 p-1 w-[10%] ${row.changeManagement1 ? 'bg-white' : 'bg-gray-100'}`}>
                      <div className="text-[9px] leading-tight break-words whitespace-normal">
                        {row.changeManagement1 && renderCell(row.changeManagement1)}
                      </div>
                    </TableCell>
                    
                    {/* Access PEPM Group 1 */}
                    <TableCell className="border-r border-gray-300 pl-1 pr-2 py-1 whitespace-nowrap w-[5%] text-center">{renderCell(row.includedInAccessPEPM)}</TableCell>
                    <TableCell 
                      className={`border-r border-gray-300 p-1 w-[10%] ${row.canAddWithFee2 ? 'bg-white' : 'bg-gray-100'} ${row.canAddWithFee2Url ? 'cursor-pointer hover:bg-blue-50' : ''}`}
                      onClick={row.canAddWithFee2Url ? () => window.open(row.canAddWithFee2Url, '_blank') : undefined}
                    >
                      <div className={`text-[9px] leading-tight break-words whitespace-normal ${row.canAddWithFee2Url ? 'text-blue-600 underline flex items-center gap-1' : ''}`}>
                        {row.canAddWithFee2 && renderCell(row.canAddWithFee2)}
                        {row.canAddWithFee2 && row.canAddWithFee2Url && (
                          <svg className="w-2.5 h-2.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        )}
                      </div>
                    </TableCell>
                    <TableCell className={`border-r border-gray-300 p-1 w-[10%] ${row.changeManagement2 ? 'bg-white' : 'bg-gray-100'}`}>
                      <div className="text-[9px] leading-tight break-words whitespace-normal">
                        {row.changeManagement2 && renderCell(row.changeManagement2)}
                      </div>
                    </TableCell>
                    
                    {/* Access PEPM Group 2 */}
                    <TableCell className="border-r border-gray-300 pl-1 pr-2 py-1 whitespace-nowrap w-[5%] text-center">{renderCell(row.includedInAccessPEPM2)}</TableCell>
                    <TableCell 
                      className={`border-r border-gray-300 p-1 w-[10%] ${row.canAddIntoProgramWithFee3 ? 'bg-white' : 'bg-gray-100'} ${row.canAddIntoProgramWithFee3Url ? 'cursor-pointer hover:bg-blue-50' : ''}`}
                      onClick={row.canAddIntoProgramWithFee3Url ? () => window.open(row.canAddIntoProgramWithFee3Url, '_blank') : undefined}
                    >
                      <div className={`text-[9px] leading-tight break-words whitespace-normal ${row.canAddIntoProgramWithFee3Url ? 'text-blue-600 underline flex items-center gap-1' : ''}`}>
                        {row.canAddIntoProgramWithFee3 && renderCell(row.canAddIntoProgramWithFee3)}
                        {row.canAddIntoProgramWithFee3 && row.canAddIntoProgramWithFee3Url && (
                          <svg className="w-2.5 h-2.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        )}
                      </div>
                    </TableCell>
                    <TableCell className={`p-1 w-[10%] ${row.changeManagement3 ? 'bg-white' : 'bg-gray-100'}`}>
                      <div className="text-[9px] leading-tight break-words whitespace-normal">
                        {row.changeManagement3 && renderCell(row.changeManagement3)}
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </div>
      
      {/* Footer */}
      <div className="bg-gray-100 p-3 border-t border-gray-300 flex-shrink-0">
        <div className="mx-auto text-center text-xs text-gray-600">
          Showing {filteredData.length} of {productMatrixData.length} products
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setSelectedProduct(null)}>
          <div className="bg-white rounded-lg shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            {/* Header */}
            <div className="sticky top-0 bg-gradient-to-r from-[#1e3a5f] to-[#2d5a8f] text-white p-6 rounded-t-lg">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="text-xs uppercase tracking-wider text-blue-200 mb-1">{selectedProduct.productLevelOne}</div>
                  <div className="flex items-center gap-3 mb-3">
                    <h2 className="text-2xl font-semibold">{selectedProduct.productLevelTwo}</h2>
                    {selectedProduct.goLiveDate === "Available now" ? (
                      <div className="inline-flex items-center gap-1 bg-green-100 text-green-800 px-2 py-0.5 rounded-full border border-green-300">
                        <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                        <span className="font-semibold text-[10px]">Live</span>
                      </div>
                    ) : (
                      <div className="inline-flex items-center gap-1.5 bg-yellow-100 text-yellow-800 px-3 py-1.5 rounded-full border border-yellow-300">
                        <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full"></div>
                        <span className="font-semibold text-[10px]">Go Live: {selectedProduct.goLiveDate}</span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    {selectedProduct.productGuideUrl && (
                      <a
                        href={selectedProduct.productGuideUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm bg-white text-[#1e3a5f] hover:bg-blue-50 px-3 py-1.5 rounded font-semibold shadow-md hover:shadow-lg transition-all border border-white/30"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span>Product Guide</span>
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                    {selectedProduct.productManager && (
                      <div className="flex items-center gap-2 bg-white/20 px-3 py-1.5 rounded">
                        <span className="text-sm text-white font-medium">Product Manager:</span>
                        <a
                          href={`mailto:${selectedProduct.productManager.email}`}
                          className="text-sm text-white hover:text-blue-200 font-semibold underline"
                        >
                          {selectedProduct.productManager.name}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedProduct(null)}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Content - Horizontal Cards */}
            <div className="p-6 space-y-4">
              {/* EAP Section */}
              <div className="border-2 border-[#008b8b] rounded-lg overflow-hidden">
                <div className="bg-[#008b8b] text-white px-4 py-3">
                  <h3 className="text-lg font-semibold">EAP</h3>
                </div>
                <div className="p-4 bg-white">
                  <div className="flex gap-4">
                    <div className="w-[15%]">
                      <div className="text-xs font-semibold text-gray-600 mb-2">Included</div>
                      <div className="text-base">
                        {selectedProduct.includedInCorePEPM ? (
                          selectedProduct.includedInCorePEPM === 'YES' ? (
                            <Badge className="bg-green-600 text-white">YES</Badge>
                          ) : selectedProduct.includedInCorePEPM === 'NO' ? (
                            <Badge variant="secondary" className="bg-gray-400 text-white">NO</Badge>
                          ) : (
                            <span>{selectedProduct.includedInCorePEPM}</span>
                          )
                        ) : (
                          <span className="text-gray-400">—</span>
                        )}
                      </div>
                    </div>
                    <div className="w-[25%]">
                      <div className="text-xs font-semibold text-gray-600 mb-2">Can Add for a Fee</div>
                      <div className="text-sm">
                        {selectedProduct.canAddIntoProgramWithFee1 ? (
                          selectedProduct.canAddIntoProgramWithFee1Url ? (
                            <a
                              href={selectedProduct.canAddIntoProgramWithFee1Url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:text-blue-800 font-medium underline inline-flex items-center gap-1"
                            >
                              <span>{selectedProduct.canAddIntoProgramWithFee1}</span>
                              <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </a>
                          ) : (
                            <span className="text-gray-900 font-medium">{selectedProduct.canAddIntoProgramWithFee1}</span>
                          )
                        ) : (
                          <span className="text-gray-400">No</span>
                        )}
                      </div>
                    </div>
                    <div className="w-[60%]">
                      <div className="text-xs font-semibold text-gray-600 mb-2">Existing Change Management</div>
                      <div className="text-sm">
                        {selectedProduct.changeManagement1 || <span className="text-gray-400">—</span>}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Health Foundations Section */}
              <div className="border-2 border-[#22805e] rounded-lg overflow-hidden">
                <div className="bg-[#22805e] text-white px-4 py-3">
                  <h3 className="text-lg font-semibold">Health Foundations (Insurance Only)</h3>
                </div>
                <div className="p-4 bg-white">
                  <div className="flex gap-4">
                    <div className="w-[15%]">
                      <div className="text-xs font-semibold text-gray-600 mb-2">Included</div>
                      <div className="text-base">
                        {selectedProduct.includedInAccessPEPM ? (
                          selectedProduct.includedInAccessPEPM === 'YES' || selectedProduct.includedInAccessPEPM.includes('YES') ? (
                            <Badge className="bg-green-600 text-white">YES</Badge>
                          ) : selectedProduct.includedInAccessPEPM === 'NO' ? (
                            <Badge variant="secondary" className="bg-gray-400 text-white">NO</Badge>
                          ) : (
                            <span>{selectedProduct.includedInAccessPEPM}</span>
                          )
                        ) : (
                          <span className="text-gray-400">—</span>
                        )}
                      </div>
                    </div>
                    <div className="w-[25%]">
                      <div className="text-xs font-semibold text-gray-600 mb-2">Can Add for a Fee</div>
                      <div className="text-sm">
                        {selectedProduct.canAddWithFee2 ? (
                          selectedProduct.canAddWithFee2Url ? (
                            <a
                              href={selectedProduct.canAddWithFee2Url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:text-blue-800 font-medium underline inline-flex items-center gap-1"
                            >
                              <span>{selectedProduct.canAddWithFee2}</span>
                              <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </a>
                          ) : (
                            <span className="text-gray-900 font-medium">{selectedProduct.canAddWithFee2}</span>
                          )
                        ) : (
                          <span className="text-gray-400">No</span>
                        )}
                      </div>
                    </div>
                    <div className="w-[60%]">
                      <div className="text-xs font-semibold text-gray-600 mb-2">Existing Change Management</div>
                      <div className="text-sm">
                        {selectedProduct.changeManagement2 || <span className="text-gray-400">—</span>}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Access Section */}
              <div className="border-2 border-[#4a90a4] rounded-lg overflow-hidden">
                <div className="bg-[#4a90a4] text-white px-4 py-3">
                  <h3 className="text-lg font-semibold">Access</h3>
                </div>
                <div className="p-4 bg-white">
                  <div className="flex gap-4">
                    <div className="w-[15%]">
                      <div className="text-xs font-semibold text-gray-600 mb-2">Included</div>
                      <div className="text-base">
                        {selectedProduct.includedInAccessPEPM2 ? (
                          selectedProduct.includedInAccessPEPM2 === 'YES' || selectedProduct.includedInAccessPEPM2.includes('YES') ? (
                            <Badge className="bg-green-600 text-white">YES</Badge>
                          ) : selectedProduct.includedInAccessPEPM2 === 'NO' ? (
                            <Badge variant="secondary" className="bg-gray-400 text-white">NO</Badge>
                          ) : (
                            <span>{selectedProduct.includedInAccessPEPM2}</span>
                          )
                        ) : (
                          <span className="text-gray-400">—</span>
                        )}
                      </div>
                    </div>
                    <div className="w-[25%]">
                      <div className="text-xs font-semibold text-gray-600 mb-2">Can Add for a Fee</div>
                      <div className="text-sm">
                        {selectedProduct.canAddIntoProgramWithFee3 ? (
                          selectedProduct.canAddIntoProgramWithFee3Url ? (
                            <a
                              href={selectedProduct.canAddIntoProgramWithFee3Url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:text-blue-800 font-medium underline inline-flex items-center gap-1"
                            >
                              <span>{selectedProduct.canAddIntoProgramWithFee3}</span>
                              <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </a>
                          ) : (
                            <span className="text-gray-900 font-medium">{selectedProduct.canAddIntoProgramWithFee3}</span>
                          )
                        ) : (
                          <span className="text-gray-400">No</span>
                        )}
                      </div>
                    </div>
                    <div className="w-[60%]">
                      <div className="text-xs font-semibold text-gray-600 mb-2">Existing Change Management</div>
                      <div className="text-sm">
                        {selectedProduct.changeManagement3 || <span className="text-gray-400">—</span>}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
