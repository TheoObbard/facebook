user.received_friend_requests.map do |request|
  json.set! request.id do 
    json.extract! request, :id, :requester_id, :requestee_id
  end 
end 

user.sent_friend_requests.map do |request|
  json.set! request.id do 
    json.extract! request, :id, :requester_id, :requestee_id
  end 
end 
