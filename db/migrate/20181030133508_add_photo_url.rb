class AddPhotoUrl < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :photo_url, :string
    add_column :posts, :content, :string
  end
end
