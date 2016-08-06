json.extract! @user,
:id,
:username,
:logo_url

json.image_url asset_path(@user.image.url)
