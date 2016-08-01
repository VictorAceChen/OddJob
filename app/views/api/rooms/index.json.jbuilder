json.array!(@messages) do |message|
  json.cotent message.content
end
