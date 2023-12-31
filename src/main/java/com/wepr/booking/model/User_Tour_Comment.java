package com.wepr.booking.model;
import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "user_tour_comment")
public class User_Tour_Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer userTourCommentID;
    private Integer Rate;
    private String commentDate;
    private String Comment;
    @ManyToOne
    @JoinColumn(name = "userID")
    private  User user;
    @ManyToOne
    @JoinColumn(name = "tourID")
    private Tour tour;

    public Integer getUserTourCommentID() {
        return userTourCommentID;
    }

    public void setUserTourCommentID(Integer userTourCommentID) {
        this.userTourCommentID = userTourCommentID;
    }

    public Integer getRate() {
        return Rate;
    }

    public void setRate(Integer rate) {
        Rate = rate;
    }

    public String getCommentDate() {
        return commentDate;
    }

    public void setCommentDate(String commentDate) {
        this.commentDate = commentDate;
    }
    public String getComment() {
        return Comment;
    }

    public void setComment(String comment) {
        this.Comment = comment;
    }
    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Tour getTour() {
        return tour;
    }

    public void setTour(Tour tour) {
        this.tour = tour;
    }


}
