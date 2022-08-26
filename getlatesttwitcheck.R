library(curl)
library(jsonlite)
library(stringr)

getlatesttwitcheck <- function(nickname){
  h <- new_handle(verbose = TRUE)
  handle_setheaders(h,
                    "Content-Type" = "application/json",
                    "Authorization" = "Bearer YourBearerToken"
  )
  url <- paste("https://api.twitter.com/2/tweets/search/recent?query=from:",nickname,sep="")
  con <- curl(url, handle = h)
  data <- data.frame(fromJSON(prettify(readLines(con))))
  if (data[1,1]==0) {
    return(list(table = "Not existent twitter account", status = 0))
  } else {
    words42 <- data.frame(id = numeric(length(data$data.id)), text = numeric(length(data$data.id)))
    for (i in 1:length(data$data.id)) {
      vecs <- as.vector(gsub(' ','',gsub('\\b\\w{1,41}\\b','',data[i,"data.text"])))
      id <- as.character(as.vector(data[i,"data.id"]))
      words42[i,1] <- ifelse(substr(vecs,1,2) == "0x" & nchar(vecs) == 42, id, NA)
      words42[i,2] <- ifelse(substr(vecs,i,2) == "0x" & nchar(vecs) == 42, vecs, NA)
    }  
    words42 <- na.omit(words42)
    if (length(words42$id) == 0){
      return(list(table = "No twit with valid UP", status = 0))
    } else {
      status = 1
    }
    return(list(table = words42, status = status))
  }
}
data <- getlatesttwitcheck("dapyourup")
#print(data)
#$table
#                   id                                       text
#1 1562086139334385669 0x4A27483F0E5a4e50AE0D33e7de05bD9eA727bC27
#$status
#[1] 1



