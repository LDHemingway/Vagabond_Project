class AddDefautlValueToPosts < ActiveRecord::Migration[5.2]
  def change
    change_column_default(
      :posts, 
      :photo_url, 
      from: nil, 
      to: "https://images.unsplash.com/photo-1465815367149-ca149851a3a9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d52b222b3fa1636ea885c9ab120ecd91&auto=format&fit=crop&w=1733&q=80"
      )
  end
end
