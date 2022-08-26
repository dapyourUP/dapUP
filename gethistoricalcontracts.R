library(jsonlite)

gethistoricalcontracts <- function(i) {
  url1 <- paste("https://explorer.execution.l16.lukso.network/api?module=contract&action=listcontracts&page=",i,"&offset=1000",
                sep="")
  return(url1)
}
luksocontracts <- data.frame(fromJSON(gethistoricalcontracts(1)))[,c("result.Address","result.ABI")]
#head(luksocontracts,1)
#                                result.Address                        result.ABI
#1   0x44a232951d9e537ec63e9b97adb987ebc58e2f27 Contract source code not verified